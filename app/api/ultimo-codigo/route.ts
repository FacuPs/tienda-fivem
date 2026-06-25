import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Conectamos con el modo "Dios" (Service Role)
const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Evitamos que Vercel guarde esto en caché (súper importante)
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Buscamos el último código creado que esté "pendiente"
    const { data, error } = await supabase
      .from('codigos')
      .select('codigo')
      .eq('estado', 'pendiente')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error || !data) {
      return NextResponse.json({ found: false });
    }

    return NextResponse.json({ found: true, codigo: data.codigo });
  } catch (err) {
    return NextResponse.json({ found: false });
  }
}