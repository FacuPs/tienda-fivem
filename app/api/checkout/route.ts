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
      back_urls: {
        success: "https://patagonia-store.vercel.app/exito",
        failure: "https://patagonia-store.vercel.app/",
        pending: "https://patagonia-store.vercel.app/"
      },
      auto_return: "approved",
      notification_url: "https://patagonia-store.vercel.app/api/mercadopago" 
    };

    console.log("Intentando crear preferencia con token:", process.env.MP_ACCESS_TOKEN?.substring(0,10) + "...");

    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.MP_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(preference)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error de Mercado Pago:", data);
      return NextResponse.json({ error: data.message || "Error en MP" }, { status: response.status });
    }

    return NextResponse.json({ url: data.init_point });
    
  } catch (error: any) {
    console.error("Error interno en checkout:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}