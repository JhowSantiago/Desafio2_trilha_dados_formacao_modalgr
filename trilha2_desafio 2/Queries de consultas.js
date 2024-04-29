//Todos os funcionários que não estão alocados em projetos de clientes (RH, Financeiro, Presidente, etc);
db.colaboradores.aggregate([
  {
    $lookup: {
      from: "equipe_projeto",
      localField: "_id",
      foreignField: "id_colaborador.$id",
      as: "alocacoes"
    }
  },
  {
    $match: {
      alocacoes: { $size: 0 } 
    }
  },
  {
    $project: {
      _id: 1,
      nome_colaborador: 1,
      cargo: 1
    }
  }
]);

//-- A quantidade de horas e faturamento por cliente;
db.projeto.aggregate([
  {
    $lookup: {
      from: "cliente",
      localField: "id_cliente.$id",
      foreignField: "_id",
      as: "cliente_info"
    }
  },
  {
    $unwind: "$cliente_info"
  },
  {
    $project: {
      id_cliente: "$cliente_info._id",
      nome_fantasia: "$cliente_info.nome_fantasia",
      _id:0,
      horas_projeto: 1,
      faturamento_mensal: 1
    }
  }
]);

///Todos os projetos que est ão ativos e possuem mais de um colaborador ModalGR;
db.projetos_ativos_colaboradores.aggregate([
  {
    $project: {
      _id: 1,
      num_colaboradores: { $size: "$colaboradores" }
    }
  },
  {
    $match: {
      num_colaboradores: { $gt: 1 }
    }
  }
]);

//-- A quantidade do faturamento mensal de cada cliente dividido pela quantidade de projetos que esse cliente possui;
db.cliente.aggregate([
  {
    $lookup: {
      from: "projeto",
      localField: "_id",
      foreignField: "id_cliente.$id",
      as: "projetos"
    }
  },
  {
    $project: {
      _id: 0,
      nome_fantasia: 1,
      faturamento_medio_por_projeto: {
        $divide: [
          { $sum: "$projetos.faturamento_mensal" },
          { $size: "$projetos" }
        ]
      }
    }
  }
]);

//-- Um Join com todas as tabelas da base, sem duplicidades de registros;
db.cliente.aggregate([
  {
    $lookup: {
      from: "projeto",
      localField: "_id",
      foreignField: "id_cliente.$id",
      as: "projetos"
    }
  },
  {
    $unwind: "$projetos"
  },
  {
    $lookup: {
      from: "equipe_projeto",
      localField: "projetos._id",
      foreignField: "id_projeto.$id",
      as: "equipes"
    }
  },
  {
    $unwind: "$equipes"
  },
  {
    $lookup: {
      from: "colaboradores",
      localField: "equipes.id_colaborador.$id",
      foreignField: "_id",
      as: "colaboradores"
    }
  },
  {
    $unwind: "$colaboradores"
  },
  {
      $lookup: {
        from: "apontamento_horas",
        localField: "projetos._id",
        foreignField: "id_projeto.$id",
        as: "apontamentos"
      }
    },
  {
    $unwind: { path: "$apontamentos", preserveNullAndEmptyArrays: true }
  },
  {
    $project: {
      id_cliente: "$_id",
      nome_fantasia: 1,
      cnpj: 1,
      email: 1,
      projeto_id: "$projetos._id",
      equipe_id: "$equipes._id",
      id_colaborador: "$colaboradores._id",
      nome_colaborador: "$colaboradores.nome_colaborador",
      data_admissao: "$colaboradores.data_admissao",
      salario: "$colaboradores.salario",
      cargo: "$colaboradores.cargo",
      id_apontamento: "$apontamentos._id",
      carga_horaria: "$apontamentos.carga_horaria"
    }
  }
]);

 
