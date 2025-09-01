import express from "express";
import dotenv from "dotenv";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});

app.get('/bruxos', (req, res) => {
    const { casa, ano, especialidade, nome, } = req.query;
    let resultado = bruxos;
  
    if (casa) {
      resultado = resultado.filter(b => b.casa.toLowerCase() === casa.toLowerCase());
    }
  
    if (ano) {
      resultado = resultado.filter(b => b.ano == ano);
    }
  
    if (especialidade) {
      resultado = resultado.filter(b => b.especialidade.toLowerCase().includes(especialidade.toLowerCase()));
    }
  
    if (nome) {
      resultado = resultado.filter(b => b.nome.toLowerCase().includes(nome.toLowerCase()));
    }
  
    res.status(200).json({
      total: resultado.length,
      data: resultado
    });
});

app.post("/bruxos", (req, res) => {
    const { nome, casa, ano, varinha, mascote, patrono, especialidade, vivo } = req.body;

    console.log("Dados recebidos:", req.body);

    if (!nome || !casa || !ano || !vivo) {
        return res.status(400).json({
            success: false,
            message: "Nome, casa, ano e estar vivo são requisitos obrigatórios para um bruxo!"
        });
    };

    const novoBruxo = {
        id: bruxos.length + 1,
        nome,
        casa: casa,
        ano: parseInt(ano),
        varinha: varinha || "Ainda não definida",
        mascote: mascote || "Ainda não definido",
        patrono: patrono || "Ainda não descoberto",
        especialidade: especialidade || "Em desenvolvimento",
        vivo: vivo
    };

    bruxos.push(novoBruxo);

    res.status(201).json({
        success: true,
        message: "Novo bruxo adicionado a Hogwarts",
        data: novoBruxo
    });
});

app.get("/varinhas", (req, res) => {
  const { material, nucleo } = req.query;
  let resultado = varinhas;

  if (nucleo) {
    resultado = resultado.filter(n => n.nucleo.toLowerCase() === nucleo.toLowerCase());
  }

  if (material) {
    resultado = resultado.filter (m => m.material.toLowerCase() === material.toLowerCase());
  }
  
  res.status(200).json({
    total: resultado.length,
    data: resultado
  });
});

app.get("/pocoes", (req, res) => {
  const { nome, efeito } = req.query;
  let resultado = pocoes;

  if (nome) {
    resultado = resultado.filter(n => n.nome.toLowerCase() === nome.toLowerCase());
  }

  if (efeito) {
    resultado = resultado.filter (e => e.efeito.toLowerCase() === efeito.toLowerCase());
  }
  
  res.status(200).json({
    total: resultado.length,
    data: resultado
  });
});

app.get("/animais", (req, res) => {
  const { nome, tipo } = req.query;
  let resultado = animais;

  if (nome) {
    resultado = resultado.filter(n => n.nome.toLowerCase() === nome.toLowerCase());
  }

  if (tipo) {
    resultado = resultado.filter (t => t.tipo.toLowerCase() === tipo.toLowerCase());
  }
  
  res.status(200).json({
    total: resultado.length,
    data: resultado
  });
});

app.post("/varinhas", (req, res) => {
  const { material, comprimento, nucleo } = req.body;

  console.log("Dados recebidos:", req.body);

  if (!material || !comprimento || !nucleo ) {
      return res.status(400).json({
          success: false,
          message: "Material, comprimento e núcleo são obrigatórios para uma varinha!"
      });
  };

  const novaVarinha = {
      id: varinhas.length + 1,
      comprimento: parseInt(comprimento),
      nucleo: nucleo,
      material: material
  };

  varinhas.push(novaVarinha);

  res.status(201).json({
      success: true,
      message: "Nova varinha adicionada",
      data: novaVarinha
  });
});

app.get("/stats", (req, res) => {
  const { casa } = req.query;
  let resultadoBruxos = bruxos;

  if (casa) {
    resultadoBruxos = resultadoBruxos.filter((s) => s.casa.toLowerCase().includes(casa.toLowerCase())
    );
  }

const contagem = {};

for (let i = 0; i < varinhas.length; i++) {
  const varinha = varinhas[i];
  const material = varinha.material;

  if (contagem[material]) {
    contagem[material]++;
  } else {
    contagem[material] = 1;
  }
}

let materialMaisFrequente = null;
let contagemMaxima = 0;

for (const material in contagem) {
  if (contagem[material] > contagemMaxima) {
    contagemMaxima = contagem[material];
    materialMaisFrequente = material;
  }
}

  res.status(200).json({
    bruxos: {
      total: resultadoBruxos.length,
      casa: casa,
},
  varinhas: {
    materialMaisFrequente: materialMaisFrequente,
    contagemMaxima: contagemMaxima,
  },
});
});

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});