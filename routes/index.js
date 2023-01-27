const { query } = require('express');
const express = require('express')

const router = express.Router();
router.get('/', (req, res) => {
    let obj = {
        nome: req.query.nome
    }
    res.render('home', obj);
});
router.get('/rota1', (req, res) => {
    let obj = {
        grade : [
            {nome: 'Gestão Agil de Projetos de Software', aulas: '4'},
            {nome: 'Banco de Dados - Não Relacional', aulas: '4'},
            {nome: 'Interação Humano Computador', aulas: '2'},
            {nome: 'Técnica de Programação', aulas: '4'},
            {nome: 'Inglês I', aulas: '2'},
            {nome: 'Desenvolvimento Web III', aulas: '4'},
            {nome: 'Algebra Linear', aulas: '4'}
        ]
    }
    res.render('grade', obj)
})
router.get('/rota2', (req, res) => {
    let obj = {
        historico: [
            {
             nome: "ESM100",
             materia: "Estágio Supervisionado em Desenvolvimento de Software Multiplataforma",
             ciclo: 20222,
             media: "--",
             frequencia: "--",
             resultado: "Aprovado"
            },
            {
             nome: "IAL010",
             materia: "Algoritmo e Lógica de Programação",
             ciclo: 20221,
             media: "9.9",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IBD014",
             materia: "Modelagem de Banco de Dados",
             ciclo: 20221,
             media: "6.8",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IBD015",
             materia: "Banco de Dados – Relacional",
             ciclo: 20222,
             media: "8.3",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IBD016",
             materia: "Banco de Dados - Não relacional",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "IED005",
             materia: "Estrutura de Dados",
             ciclo: 20222,
             media: "7.5",
             frequencia: "92.50%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IES011",
             materia: "Engenharia de Software I",
             ciclo: 20221,
             media: "8.5",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IES012",
             materia: "Engenharia de Software II",
             ciclo: 20222,
             media: "7.8",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "IHC004",
             materia: "Interação Humano Computador",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "ILP036",
             materia: "Técnica de Programação I",
             ciclo: 20222,
             media: "9.7",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "ILP037",
             materia: "Técnica de Programação II",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "ING085",
             materia: "Inglês I",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "ISO011",
             materia: "Sistemas Operacionais e Redes de Computadores",
             ciclo: 20221,
             media: "8.3",
             frequencia: "85.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "ISW028",
             materia: "Desenvolvimento Web I",
             ciclo: 20221,
             media: "9.5",
             frequencia: "90.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "ISW029",
             materia: "Desenvolvimento Web II",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "ISW030",
             materia: "Desenvolvimento Web III",
             ciclo: 20231,
             media: "--",
             frequencia: "--",
             resultado: "Em Curso"
            },
            {
             nome: "ISW031",
             materia: "Design Digital",
             ciclo: 20221,
             media: "9.3",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            },
            {
             nome: "MAT019",
             materia: "Matemática para Computação",
             ciclo: 20222,
             media: "8.8",
             frequencia: "100.00%",
             resultado: "Aprovado por Nota e Frequência"
            }
        ]     
    }
    res.render('historico', obj);
})

module.exports = router;