window.addEventListener();

// Aguarda o carregamento do DOM
$(document).ready(function(){
     // Seleciona todos os elementos com a classe "character"
    var characters = $(".character");
    // Define o intervalo de tempo (em milissegundos) para a animação
    var timerInterval = 30;
    // Variável para armazenar o ID do intervalo
    var intervalId;
    // Contador para controlar a ordem dos caracteres
    var dataCounter = 0;
    // Índice do caractere atual
    var characterIndex;
    // Limite para a mudança do caractere
    var changeThreshold;
    // Array com as letras da mensagem "404 Not Found"
    var messageLetters = ["4","0","4","  ","N","o","t","  ","F","o","u","n","d"];

    // Para cada caractere, define um limite aleatório para a mudança
    characters.each(function(){
        changeThreshold = Math.round(Math.random()*100);
        $(this).attr('data-change-threshold', changeThreshold)
    });

    // Função para gerar um número aleatório entre 0 e 9
    function generateRandomNumber(){
        return Math.round(Math.random()*9);
    }

     // Função para selecionar um caractere aleatório
    function selectRandomCharacter(){
        return Math.round(Math.random()*characters.length+1);
    }

    // Função principal que atualiza os caracteres
    function updateCharacters(){
         // Seleciona um caractere aleatório e define um número aleatório
        $(".character:nth-child("+selectRandomCharacter()+")").html(''+generateRandomNumber()+'');
        $(".character:nth-child("+selectRandomCharacter()+")").attr('data-number', dataCounter);
        dataCounter++;

        characters.each(function(){
            // Para cada caractere, verifica se o contador excedeu o limite
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change-threshold')) ) {
                // Se excedeu, define a letra correspondente da mensagem
                characterIndex = $('.letter').index(this);
                $(this).html(messageLetters[characterIndex]);
               // Remove a classe "character" para evitar que seja alterado novamente
                $(this).removeClass('character');
            }
        });

    };

    // Define o intervalo de tempo para a função updateCharacters
    intervalId = setInterval(updateCharacters, timerInterval);

});