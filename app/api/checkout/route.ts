import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, nombre, precio } = body;

    const preference = {
      items: [
        {
          id: id,
          title: nombre,
          quantity: 1,
          unit_price: Number(precio),
          currency_id: "ARS",
        }
      ],
      // AQUÍ LE DECIMOS A MERCADO PAGO QUE VUELVA A TU PÁGINA DE ÉXITO
      back_urls: {
        success: "https://patagonia-store.vercel.app/exito",
        failure: "https://patagonia-store.vercel.app/",
        pending: "https://patagonia-store.vercel.app/"
      },
      // ESTO HACE QUE LA REDIRECCIÓN SEA AUTOMÁTICA
      auto_return: "approved",
      
      // AQUÍ LE DECIMOS QUE AVISE A TU WEBHOOK CUANDO ALGUIEN PAGUE
      notification_url: "https://patagonia-store.vercel.app/api/mercadopago" 
    };

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(preference)
    });

    const data = await response.json();

    // Devolvemos el link de pago generado
    return NextResponse.json({ url: data.init_point });
    
  } catch (error) {
    return NextResponse.json({ error: "Error al crear pago" }, { status: 500 });
  }
}