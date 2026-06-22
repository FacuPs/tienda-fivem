import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
  const body = await request.json();
  const paymentId = body.data?.id;

  if (paymentId) {
    const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
    });
    const paymentData = await res.json();

    if (paymentData.status === 'approved') {
      const modeloComprado = paymentData.description.includes('7.5R') ? 'golf75r' : 'golfgti';
      const nuevoCodigo = `PAT-${modeloComprado.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;

      await supabase.from('codigos').insert([
        { codigo: nuevoCodigo, modelo: modeloComprado, estado: 'pendiente' }
      ]);
    }
  }
  return NextResponse.json({ received: true });
}