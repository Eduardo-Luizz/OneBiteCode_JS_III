const dayjs = require("dayjs")

const calculate = (dataNascimento) => {
    const dataAtual = dayjs();
    const dataAniversario = dayjs(dataNascimento, 'YYYY-MM-DD');

    const idade = dataAtual.diff(dataAniversario, 'year');

    const proximoAniversario = dataAniversario.add(idade + 1, 'year');
    const diasRestantes = proximoAniversario.diff(dataAtual, 'day');

    const formatoData = 'DD/MM/YYYY';
    const dataAniversarioFormatada = proximoAniversario.format(formatoData);

    console.log(`Idade atual: ${idade}`);
    console.log(`Próximo aniversário: ${dataAniversarioFormatada}`);
    console.log(`Dias restantes para o próximo aniversário: ${diasRestantes}`);
}

calculate('2001-02-08')
