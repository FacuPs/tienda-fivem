import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '', 
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paymentId = body.data?.id || body.id;

    if (paymentId) {
      // 1. Buscamos la info en Mercado Pago
      const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
      });
      const paymentData = await res.json();

      // 2. Si se aprobó el pago...
      if (paymentData.status === 'approved') {
        
        // Obtenemos qué auto compró (el "id" que mandamos en el Paso 1)
        const autoComprado = paymentData.additional_info?.items?.[0]?.id || 'golf';
        
        // 3. Verificamos que no hayamos entregado este pago ya
        const { data: existe } = await supabase
          .from('codigos')
          .select('*')
          .eq('payment_id', paymentId.toString())
          .single();

        // 4. Si es nuevo, generamos el código
        if (!existe) {
          const nuevoCodigo = `PAT-${autoComprado.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;

          // GUARDAMOS EN SUPABASE CON EL PAYMENT ID
          await supabase.from('codigos').insert([
            { 
              codigo: nuevoCodigo, 
              modelo: autoComprado, 
              estado: 'pendiente',
              payment_id: paymentId.toString()
            }
          ]);
        }
      }
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Error Webhook:", error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}