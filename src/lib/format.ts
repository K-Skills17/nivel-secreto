export function formatBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function formatInstallments(price: number, maxInstallments = 6): string {
  const installment = price / maxInstallments;
  return `ou ${maxInstallments}x de ${formatBRL(installment)}`;
}

export function formatPixPrice(price: number, discount = 0.05): string {
  return formatBRL(price * (1 - discount));
}
