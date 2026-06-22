import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!, 
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const codigo = searchParams.get('codigo');

  if (!codigo) {
    return NextResponse.json({ valido: false, mensaje: 'Falta el código' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('codigos')
    .select('*')
    .eq('codigo', codigo)
    .eq('estado', 'pendiente')
    .single();

  if (error || !data) {
    return NextResponse.json({ valido: false, mensaje: 'Código inválido o ya usado' });
  }

  await supabase
    .from('codigos')
    .update({ estado: 'usado' })
    .eq('codigo', codigo);

  return NextResponse.json({ 
    valido: true, 
    modelo: data.modelo 
  });
}