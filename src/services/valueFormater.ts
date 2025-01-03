export default function ValueFormatter({ value }: { value: number }): string {
  if (typeof value !== 'number' || Number.isNaN(value) || value === 0) {
    return '0,00';
  }
  let valorFormatado = value.toFixed(2);
  valorFormatado = valorFormatado.replace('.', ',');
  valorFormatado = parseFloat(valorFormatado.replace(',', '.')).toLocaleString('pt-BR');
  return valorFormatado;
}
