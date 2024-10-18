export type dataAPIBrasil = {
  number: string;
  name: string;
  phone: string;
  profession: string;
  weight: number;
  height: number;
  status: string;
};
export type dataAPIArgentina = {
  number: string;
  name: string;
  phone: string;
  profession: string;
  weight: number;
  height: number;
  status: string;
  cidade: string;    // Nova coluna
  estado: string;    // Nova coluna
  salario: number;   // Nova coluna
};
export type dataAPIAmericano = {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  dataCriacao: string;
  cidade: string;
  estado: string;
  salario: number; 
};


export const dataBrasil:dataAPIBrasil[] = [
  { number: "135", name: "Lucas Silva", phone: "+34 612345678", profession: "Engenheiro", weight: 70, height: 175, status: "PAGO" },
  { number: "190", name: "Ana Costa", phone: "+34 698765432", profession: "Professora", weight: 60, height: 160, status: "AGUARDANDO" },
  { number: "205", name: "Pedro Gomes", phone: "+34 634567890", profession: "Designer", weight: 75, height: 180, status: "CANCELADO" },
  { number: "278", name: "Maria Oliveira", phone: "+34 612987654", profession: "Médica", weight: 65, height: 165, status: "ATRASADO" },
  { number: "314", name: "Fernanda Pereira", phone: "+34 698543210", profession: "Arquiteta", weight: 68, height: 170, status: "PAGO" },
  { number: "431", name: "Carlos Santos", phone: "+34 634123456", profession: "Programador", weight: 80, height: 182, status: "AGUARDANDO" },
  { number: "512", name: "Patrícia Almeida", phone: "+34 612345789", profession: "Jornalista", weight: 55, height: 158, status: "CANCELADO" },
  { number: "628", name: "Rafael Mendes", phone: "+34 698765321", profession: "Chef", weight: 82, height: 177, status: "ATRASADO" },
  { number: "753", name: "Juliana Ferreira", phone: "+34 634567123", profession: "Psicóloga", weight: 64, height: 162, status: "PAGO" },
  { number: "864", name: "Tiago Martins", phone: "+34 612789456", profession: "Vendedor", weight: 70, height: 172, status: "AGUARDANDO" },
];
export const dataArgentina: dataAPIArgentina[] = [
  { number: "001", name: "Juan Pérez", phone: "+54 9 11 1234-5678", profession: "Engenheiro", weight: 75, height: 180, status: "PAGO", cidade: "Buenos Aires", estado: "Buenos Aires", salario: 50000 },
  { number: "002", name: "María Gómez", phone: "+54 9 11 2345-6789", profession: "Professora", weight: 60, height: 165, status: "AGUARDANDO", cidade: "Córdoba", estado: "Córdoba", salario: 45000 },
  { number: "003", name: "Carlos Fernández", phone: "+54 9 11 3456-7890", profession: "Designer", weight: 70, height: 175, status: "CANCELADO", cidade: "Rosário", estado: "Santa Fe", salario: 48000 },
  { number: "004", name: "Lucía Martínez", phone: "+54 9 11 4567-8901", profession: "Médica", weight: 68, height: 170, status: "PAGO", cidade: "Mendoza", estado: "Mendoza", salario: 60000 },
  { number: "005", name: "Federico López", phone: "+54 9 11 5678-9012", profession: "Arquiteto", weight: 82, height: 185, status: "AGUARDANDO", cidade: "La Plata", estado: "Buenos Aires", salario: 55000 },
  { number: "006", name: "Sofía Rodríguez", phone: "+54 9 11 6789-0123", profession: "Programadora", weight: 64, height: 160, status: "PAGO", cidade: "San Miguel de Tucumán", estado: "Tucumán", salario: 52000 },
  { number: "007", name: "Javier Torres", phone: "+54 9 11 7890-1234", profession: "Jornalista", weight: 57, height: 162, status: "CANCELADO", cidade: "Salta", estado: "Salta", salario: 46000 },
  { number: "008", name: "Valentina Silva", phone: "+54 9 11 8901-2345", profession: "Chef", weight: 80, height: 178, status: "ATRASADO", cidade: "Neuquén", estado: "Neuquén", salario: 49000 },
  { number: "009", name: "Mateo Díaz", phone: "+54 9 11 9012-3456", profession: "Psicólogo", weight: 65, height: 165, status: "PAGO", cidade: "Bahía Blanca", estado: "Buenos Aires", salario: 53000 },
  { number: "010", name: "Isabella Mendez", phone: "+54 9 11 0123-4567", profession: "Vendedor", weight: 72, height: 172, status: "AGUARDANDO", cidade: "Córdoba", estado: "Córdoba", salario: 47000 },
];
export const dataAmericana: dataAPIAmericano[] = [
  { id: 1, titulo: "Engenheiro de Software", descricao: "Desenvolvimento de aplicações web.", ativo: true, dataCriacao: "2023-01-15", cidade: "Nova Iorque", estado: "NY", salario: 90000 },
  { id: 2, titulo: "Designer Gráfico", descricao: "Criação de materiais visuais.", ativo: true, dataCriacao: "2023-02-10", cidade: "Los Angeles", estado: "CA", salario: 75000 },
  { id: 3, titulo: "Gerente de Projetos", descricao: "Gerenciamento de equipes de projeto.", ativo: false, dataCriacao: "2023-03-05", cidade: "Chicago", estado: "IL", salario: 95000 },
  { id: 4, titulo: "Analista de Dados", descricao: "Análise de grandes conjuntos de dados.", ativo: true, dataCriacao: "2023-04-12", cidade: "Houston", estado: "TX", salario: 80000 },
  { id: 5, titulo: "Desenvolvedor Front-end", descricao: "Construção de interfaces de usuário.", ativo: true, dataCriacao: "2023-05-25", cidade: "Seattle", estado: "WA", salario: 85000 },
  { id: 6, titulo: "Arquiteto de Soluções", descricao: "Desenho de soluções arquiteturais.", ativo: true, dataCriacao: "2023-06-30", cidade: "San Francisco", estado: "CA", salario: 120000 },
  { id: 7, titulo: "Cientista de Dados", descricao: "Desenvolvimento de modelos preditivos.", ativo: false, dataCriacao: "2023-07-15", cidade: "Boston", estado: "MA", salario: 110000 },
  { id: 8, titulo: "Product Owner", descricao: "Gerenciamento de produtos e backlog.", ativo: true, dataCriacao: "2023-08-22", cidade: "Austin", estado: "TX", salario: 90000 },
  { id: 9, titulo: "DevOps Engineer", descricao: "Automação de processos de desenvolvimento.", ativo: true, dataCriacao: "2023-09-18", cidade: "Atlanta", estado: "GA", salario: 95000 },
  { id: 10, titulo: "Teste de Qualidade", descricao: "Testes de software e garantia de qualidade.", ativo: true, dataCriacao: "2023-10-05", cidade: "Miami", estado: "FL", salario: 70000 },
];
