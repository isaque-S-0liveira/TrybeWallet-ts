function TableHeader() {
  return (
    <tr>
      <th id="th-1">Descrição</th>
      <th>Tag</th>
      <th>Método de pagamento</th>
      <th data-testid="value">Valor</th>
      <th data-testid="currency">Moeda</th>
      <th>Câmbio utilizado</th>
      <th>Valor convertido</th>
      <th>Moeda de conversão</th>
      <th>Editar/Excluir</th>
    </tr>
  );
}

export default TableHeader;
