import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL || '', 
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const paymentId = body.data?.id;

    if (paymentId) {
      const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
      });
      const paymentData = await res.json();

      if (paymentData.status === 'approved') {
        // Obtenemos el título del producto que el cliente pagó en MP (todo en minúsculas para evitar errores)
        const descripcionPago = (paymentData.description || '').toLowerCase();
        
        // SISTEMA INTELIGENTE DE ASIGNACIÓN DE AUTOS
        let modeloComprado = 'golf75r'; // Valor por defecto
        let prefijoCodigo = 'AUTO';

        // 1. Si el título en Mercado Pago tiene la palabra "7.5r"
        if (descripcionPago.includes('7.5r')) {
            modeloComprado = 'golf75r';
            prefijoCodigo = 'GOLF75';
        } 
        // 2. Si el título en Mercado Pago tiene la palabra "gti"
        else if (descripcionPago.includes('gti')) {
            modeloComprado = 'golfgti';
            prefijoCodigo = 'GTIMK7';
        }
        // 👉 ACÁ PODÉS AGREGAR TUS FUTUROS AUTOS ASÍ:
        // else if (descripcionPago.includes('bmw')) {
        //     modeloComprado = 'bmwm4';
        //     prefijoCodigo = 'BMWM4';
        // }

        // Generamos el código, ejemplo: PAT-GOLF75-12345
        const nuevoCodigo = `PAT-${prefijoCodigo}-${Math.floor(10000 + Math.random() * 90000)}`;

        await supabase.from('codigos').insert([
          { codigo: nuevoCodigo, modelo: modeloComprado, estado: 'pendiente' }
        ]);
      }
    }
    return NextResponse.json({ received: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}