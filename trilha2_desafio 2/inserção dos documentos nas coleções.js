// Inserção dos documentos na coleção cliente com referências
db.cliente.insertMany([
  { _id: 1, nome_fantasia: "Empresa XPTO", cnpj: "12345678901234", email: "empresaXPTO@example.com", faturamento_mensal: 50000.00 },
  { _id: 2, nome_fantasia: "Fictícia Corp", cnpj: "98765432109876", email: "ficticia@example.com", faturamento_mensal: 75000.00 },
  { _id: 3, nome_fantasia: "Imagina Ltda", cnpj: "45678901234567", email: "imagina@example.com", faturamento_mensal: 60000.00 },
  { _id: 4, nome_fantasia: "DreamTech", cnpj: "78901234567890", email: "dreamtech@example.com", faturamento_mensal: 80000.00 },
  { _id: 5, nome_fantasia: "Soluções Imaginárias", cnpj: "23456789012345", email: "solimag@example.com", faturamento_mensal: 55000.00 },
  { _id: 6, nome_fantasia: "Ficção S.A.", cnpj: "67890123456789", email: "ficcao@example.com", faturamento_mensal: 70000.00 },
  { _id: 7, nome_fantasia: "Inovação Futura", cnpj: "54321098765432", email: "inovacao@example.com", faturamento_mensal: 90000.00 },
  { _id: 8, nome_fantasia: "Visionária Ltda", cnpj: "87654321098765", email: "visionaria@example.com", faturamento_mensal: 65000.00 },
  { _id: 9, nome_fantasia: "Evolução Tech", cnpj: "32109876543210", email: "evolucao@example.com", faturamento_mensal: 72000.00 },
  { _id: 10, nome_fantasia: "Ideias Criativas", cnpj: "09876543210987", email: "ideias@example.com", faturamento_mensal: 58000.00 }
]);

// Inserção dos documentos na coleção projeto com referências
db.projeto.insertMany([
  { _id: 1, id_cliente: { $ref: "cliente", $id: 1 }, horas_projeto: "40:00:00", concluido: true, faturamento_mensal: 10000.00 },
  { _id: 2, id_cliente: { $ref: "cliente", $id: 2 }, horas_projeto: "30:00:00", concluido: false, faturamento_mensal: 8000.00 },
  { _id: 3, id_cliente: { $ref: "cliente", $id: 3 }, horas_projeto: "50:00:00", concluido: true, faturamento_mensal: 12000.00 },
  { _id: 4, id_cliente: { $ref: "cliente", $id: 4 }, horas_projeto: "45:00:00", concluido: false, faturamento_mensal: 9500.00 },
  { _id: 5, id_cliente: { $ref: "cliente", $id: 5 }, horas_projeto: "35:00:00", concluido:  true, faturamento_mensal: 8500.00 },
  { _id: 6, id_cliente: { $ref: "cliente", $id: 6 }, horas_projeto: "55:00:00", concluido: false, faturamento_mensal: 11000.00 },
  { _id: 7, id_cliente: { $ref: "cliente", $id: 7 }, horas_projeto: "48:00:00", concluido: true, faturamento_mensal: 13000.00 },
  { _id: 8, id_cliente: { $ref: "cliente", $id: 8 }, horas_projeto: "42:00:00", concluido: false, faturamento_mensal: 9200.00 },
  { _id: 9, id_cliente: { $ref: "cliente", $id: 9 }, horas_projeto: "38:00:00", concluido: true, faturamento_mensal: 10500.00 },
  { _id: 10, id_cliente: { $ref: "cliente", $id: 10 }, horas_projeto: "32:00:00", concluido: false, faturamento_mensal: 7800.00 }
]);

// Inserção dos documentos na coleção colaboradores
db.colaboradores.insertMany([
  { _id: 1, data_admissao: new Date("2018-05-20"), salario: 4000.00, nome_colaborador: "Ana Pereira", cargo: "Analista de Sistemas" },
  { _id: 2, data_admissao: new Date("2019-08-15"), salario: 3500.00, nome_colaborador: "Carlos Oliveira", cargo: "Web Designer" },
  { _id: 3, data_admissao: new Date("2020-02-10"), salario: 4500.00, nome_colaborador: "Mariana Costa", cargo: "Gerente de Projetos" },
  { _id: 4, data_admissao: new Date("2017-10-05"), salario: 3800.00, nome_colaborador: "Rafael Santos", cargo: "Programador" },
  { _id: 5, data_admissao: new Date("2016-12-12"), salario: 4200.00, nome_colaborador: "Patrícia Almeida", cargo: "Designer UX/UI" },
  { _id: 6, data_admissao: new Date("2019-03-25"), salario: 3700.00, nome_colaborador: "Lucas Ferreira", cargo: "Analista de Qualidade" },
  { _id: 7, data_admissao: new Date("2018-09-30"), salario: 4300.00, nome_colaborador: "Fernanda Souza", cargo: "Analista de Dados" },
  { _id: 8, data_admissao: new Date("2020-07-20"), salario: 3600.00, nome_colaborador: "Diego Silva", cargo: "Desenvolvedor Front-end" },
  { _id: 9, data_admissao: new Date("2019-04-18"), salario: 3900.00, nome_colaborador: "Camila Rodrigues", cargo: "Analista de Marketing" },
  { _id: 10, data_admissao: new Date("2017-06-22"), salario: 4100.00, nome_colaborador: "Gustavo Oliveira", cargo: "Engenheiro de Software" },
  { _id: 11, data_admissao: new Date("2023-06-10"), salario: 4800.00, nome_colaborador: "Rafaela Lima", cargo: "RH" },
  { _id: 12, data_admissao: new Date("2022-09-05"), salario: 5000.00, nome_colaborador: "Roberto Santos", cargo: "Financeiro" },
  { _id: 13, data_admissao: new Date("2023-01-15"), salario: 5500.00, nome_colaborador: "Marcela Costa", cargo: "Presidente" },
  { _id: 14, data_admissao: new Date("2023-04-20"), salario: 4600.00, nome_colaborador: "Lucas Oliveira", cargo: "RH" },
  { _id: 15, data_admissao: new Date("2022-12-02"), salario: 5100.00, nome_colaborador: "Juliana Pereira", cargo: "Financeiro" },
  { _id: 16, data_admissao: new Date("2023-03-25"), salario: 6000.00, nome_colaborador: "Fernando Silva", cargo: "Administrativo" },
  { _id: 17, data_admissao: new Date("2022-11-08"), salario: 4700.00, nome_colaborador: "Vanessa Rodrigues", cargo: "RH" },
  { _id: 18, data_admissao: new Date("2023-08-12"), salario: 5200.00, nome_colaborador: "Pedro Mendes", cargo: "Financeiro" },
  { _id: 19, data_admissao: new Date("2023-02-18"), salario: 5800.00, nome_colaborador: "Camila Oliveira", cargo: "Administrativo" },
  { _id: 20, data_admissao: new Date("2023-07-30"), salario: 4900.00, nome_colaborador: "Gustavo Santos", cargo: "RH" }
]);

// Inserção dos documentos na coleção equipe_projeto com referências
db.equipe_projeto.insertMany([
  { _id: 1, id_colaborador: { $ref: "colaboradores", $id: 1 }, id_projeto: { $ref: "projeto", $id: 1 } },
  { _id: 2, id_colaborador: { $ref: "colaboradores", $id: 2 }, id_projeto: { $ref: "projeto", $id: 1 } },
  { _id: 3, id_colaborador: { $ref: "colaboradores", $id: 3 }, id_projeto: { $ref: "projeto", $id: 2 } },
  { _id: 4, id_colaborador: { $ref: "colaboradores", $id: 4 }, id_projeto: { $ref: "projeto", $id: 3 } },
  { _id: 5, id_colaborador: { $ref: "colaboradores", $id: 5 }, id_projeto: { $ref: "projeto", $id: 4 } },
  { _id: 6, id_colaborador: { $ref: "colaboradores", $id: 6 }, id_projeto: { $ref: "projeto", $id: 4 } },
  { _id: 7, id_colaborador: { $ref: "colaboradores", $id: 7 }, id_projeto: { $ref: "projeto", $id: 5 } },
  { _id: 8, id_colaborador: { $ref: "colaboradores", $id: 8 }, id_projeto: { $ref: "projeto", $id: 5 } }
]);

// Inserção dos documentos na coleção apontamento_horas com referências
db.apontamento_horas.insertMany([
  { _id: 1, id_colaborador: { $ref: "colaboradores", $id: 1 }, id_projeto: { $ref: "projeto", $id: 1 }, carga_horaria: "20:00:00" },
  { _id: 2, id_colaborador: { $ref: "colaboradores", $id: 2 }, id_projeto: { $ref: "projeto", $id: 1 }, carga_horaria: "20:00:00" },
  { _id: 3, id_colaborador: { $ref: "colaboradores", $id: 3 }, id_projeto: { $ref: "projeto", $id: 2 }, carga_horaria: "25:00:00" },
  { _id: 4, id_colaborador: { $ref: "colaboradores", $id: 4 }, id_projeto: { $ref: "projeto", $id: 3 }, carga_horaria: "22:30:00" },
  { _id: 5, id_colaborador: { $ref: "colaboradores", $id: 5 }, id_projeto: { $ref: "projeto", $id: 4 }, carga_horaria: "17:30:00" },
  { _id: 6, id_colaborador: { $ref: "colaboradores", $id: 6 }, id_projeto: { $ref: "projeto", $id: 4 }, carga_horaria: "15:30:00" },
  { _id: 7, id_colaborador: { $ref: "colaboradores", $id: 7 }, id_projeto: { $ref: "projeto", $id: 5 }, carga_horaria: "24:00:00" },
  { _id: 8, id_colaborador: { $ref: "colaboradores", $id: 8 }, id_projeto: { $ref: "projeto", $id: 5 }, carga_horaria: "18:00:00" }
]);

// Inserção dos documentos projetos ativos
db.projetos_ativos_colaboradores.insertMany([
  {
    _id: 1,
    id_cliente: 1,
    horas_projeto: "40:00:00",
    faturamento_mensal: 10000.00,
    colaboradores: [
      { _id: 1, data_admissao: new Date("2018-05-20"), salario: 4000.00, nome_colaborador: "Ana Pereira", cargo: "Analista de Sistemas" },
      { _id: 2, data_admissao: new Date("2019-08-15"), salario: 3500.00, nome_colaborador: "Carlos Oliveira", cargo: "Web Designer" }
    ]
  },
  {
    _id: 3,
    id_cliente: 3,
    horas_projeto: "50:00:00",
    faturamento_mensal: 12000.00,
    colaboradores: [
      { _id: 3, data_admissao: new Date("2020-02-10"), salario: 4500.00, nome_colaborador: "Mariana Costa", cargo: "Gerente de Projetos" }
    ]
  },
  {
    _id: 5,
    id_cliente: 5,
    horas_projeto: "35:00:00",
    faturamento_mensal: 8500.00,
    colaboradores: [
      { _id: 7, data_admissao: new Date("2018-09-30"), salario: 4300.00, nome_colaborador: "Fernanda Souza", cargo: "Analista de Dados" },
     { _id: 8, data_admissao: new Date("2020-07-20"), salario: 3600.00, nome_colaborador: "Diego Silva", cargo: "Desenvolvedor Front-end" }
    ]
  },
  {
    _id: 7,
    id_cliente: 7,
    horas_projeto: "48:00:00",
    faturamento_mensal: 13000.00,
    colaboradores: [
      { _id: 7, data_admissao: new Date("2018-09-30"), salario: 4300.00, nome_colaborador: "Fernanda Souza", cargo: "Analista de Dados" }
    ]
  },
  {
    _id: 9,
    id_cliente: 9,
    horas_projeto: "38:00:00",
    faturamento_mensal: 10500.00,
    colaboradores: [
      { _id: 9, data_admissao: new Date("2019-04-18"), salario: 3900.00, nome_colaborador: "Camila Rodrigues", cargo: "Analista de Marketing" }
    ]
  }
]);

