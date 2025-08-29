const bruxos = [
    {
        id: 1,
        nome: "Harry Potter",
        casa: "Grifinória",
        ano: 7,
        varinha: "Azevinho e pena de fênix, 28cm",
        mascote: "Coruja (Edwiges)",
        patrono: "Cervo",
        especialidade: "Sobreviver a Voldemort 😎",
        vivo: false
    },
    {
        id: 2,
        nome: "Hermione Granger",
        casa: "Grifinória",
        ano: 7,
        varinha: "Videira e fibra de dragão, 27cm",
        mascote: "Gato (Bichento)",
        patrono: "Lontra",
        especialidade: "Magia avançada 📚",
        vivo: true
    },
    {
        id: 3,
        nome: "Ron Weasley",
        casa: "Grifinória",
        ano: 7,
        varinha: "Salgueiro e pelo de unicórnio, 35cm",
        mascote: "Coruja (Pígdêu)",
        patrono: "Cachorro Jack Russell Terrier",
        especialidade: "Xadrez bruxo ♟️",
        vivo: true
    },
    {
        id: 4,
        nome: "Draco Malfoy",
        casa: "Sonserina",
        ano: 7,
        varinha: "Azevinho e pelo de unicórnio, 25cm",
        mascote: "Coruja (sem nome)",
        patrono: "Indefinido",
        especialidade: "Poções 💀",
        vivo: true
    },
    {
        id: 5,
        nome: "Luna Lovegood",
        casa: "Corvinal",
        ano: 6,
        varinha: "Madeira desconhecida e núcleo não revelado",
        mascote: "Lebre (patrono)",
        patrono: "Lebre",
        especialidade: "Criaturas mágicas ✨",
        vivo: true
    }
];

const casas = [
    { id: 1, nome: "Grifinória", fundadora: "Godric Gryffindor", cores: "Vermelho e Dourado", animal: "Leão" },
    { id: 2, nome: "Sonserina", fundadora: "Salazar Slytherin", cores: "Verde e Prata", animal: "Serpente" },
    { id: 3, nome: "Corvinal", fundadora: "Rowena Ravenclaw", cores: "Azul e Bronze", animal: "Águia" },
    { id: 4, nome: "Lufa-Lufa", fundadora: "Helga Hufflepuff", cores: "Amarelo e Preto", animal: "Texugo" }
];

const varinhas = [
    { id: 1, material: "Azevinho", nucleo: "Pena de Fênix", comprimento: "28cm" },
    { id: 2, material: "Videira", nucleo: "Fibra de Coração de Dragão", comprimento: "27cm" },
    { id: 3, material: "Salgueiro", nucleo: "Pelo de Unicórnio", comprimento: "35cm" },
    { id: 4, material: "Carvalho Inglês", nucleo: "Pelo de Testrálio", comprimento: "32cm" }
];

const animais = [
    { id: 1, nome: "Coruja", tipo: "Correio/Companhia" },
    { id: 2, nome: "Gato", tipo: "Companhia" },
    { id: 3, nome: "Sapo", tipo: "Companhia" },
    { id: 4, nome: "Rato", tipo: "Companhia" }
];

const pocoes = [
    { id: 1, nome: "Polissuco", efeito: "Transforma na aparência de outra pessoa" },
    { id: 2, nome: "Felix Felicis", efeito: "Sorte temporária" },
    { id: 3, nome: "Amortentia", efeito: "Poção do amor" },
    { id: 4, nome: "Veritaserum", efeito: "Força a dizer a verdade" }
];

export default { bruxos, casas, varinhas, animais, pocoes };