document.addEventListener('alpine:init', () => {
    // Lógica da Contagem Regressiva
    Alpine.data('countdown', () => ({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        targetDate: new Date('2026-01-10T00:00:00'),
        
        init() {
            this.update();
            setInterval(() => {
                this.update();
            }, 1000);
        },

        update() {
            const now = new Date();
            const diff = this.targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                this.days = this.hours = this.minutes = this.seconds = '00';
                return;
            }

            this.days = this.pad(Math.floor(diff / (1000 * 60 * 60 * 24)));
            this.hours = this.pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            this.minutes = this.pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
            this.seconds = this.pad(Math.floor((diff % (1000 * 60)) / 1000));
        },

        pad(num) {
            return String(num).padStart(2, '0');
        }
    }));

    // Lógica da Lista de Presentes
    Alpine.data('giftList', () => ({
        sortOrder: 'name-asc',
        visibleItemsCount: 20, // Define o número inicial de itens visíveis
        gifts: [
            { id: 1, name: 'Chá para aguentar a ansiedade de dizer sim', price: 20.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Chá+para+ansiedade' },
            { id: 2, name: 'Só pra dizer que não dei nada', price: 30.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lembrancinha' },
            { id: 3, name: 'Batedor de ovos', price: 35.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Batedor+de+ovos' },
            { id: 4, name: 'Conjunto de Copos', price: 35.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Copos' },
            { id: 5, name: 'Cota para a noiva jogar o buquê para a sua namorada', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Buquê' },
            { id: 6, name: 'Garrafa de café', price: 70.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Jogo+de+Garrafa de Café' },
            { id: 7, name: 'Balança de cozinha', price: 40.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Balança' },
            { id: 8, name: 'Colher de pau', price: 30.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Colher+de+Pau' },
            { id: 9, name: 'Acessório para cortar a unha do dedão do noivo', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Maquita' },
            { id: 10, name: 'Operação Lua de Mel - Cota #01', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 11, name: 'Lixeira cozinha', price: 60.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lixeira' },
            { id: 12, name: 'Paciência para o Noivo', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Paciência' },
            { id: 13, name: 'Tapete de Banheiro', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Tapete' },
            { id: 14, name: 'Jogo de acessórios para banheiro', price: 90.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Acessórios+Banheiro' },
            { id: 15, name: 'Apoio psicológico para o casal comer mais saudável', price: 60.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Apoio' },
            { id: 16, name: 'Caminho de mesa', price: 65.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Caminho+de+Mesa' },
            { id: 17, name: 'Cortador de Pizza', price: 40.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cortador+de+Pizza' },
            { id: 18, name: 'Escorredor de Pratos', price: 60.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Escorredor' },
            { id: 19, name: 'Espremedor elétrico', price: 65.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Espremedor' },
            { id: 20, name: 'Cota #7 - Carne para o churrasco', price: 70.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 21, name: 'Enxada para o noivo capinar', price: 70.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Enxada' },
            { id: 22, name: 'Razão para a mulher por 1 mês', price: 70.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Razão' },
            { id: 23, name: 'Taxa para poder falar "É pavê ou pá cumê?"', price: 70.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Taxa+pavê' },
            { id: 24, name: 'Cesto para roupas', price: 50.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cesto+de+Roupas' },
            { id: 25, name: 'Conjunto de Bowl em Cerâmica - 6 peças', price: 79.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Bowls' },
            { id: 26, name: 'Incentivo para ter filha', price: 85.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Filha' },
            { id: 27, name: 'Incentivo para ter filho', price: 80.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Filho' },
            { id: 28, name: 'Mop', price: 80.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Mop' },
            { id: 29, name: 'Tampões de ouvido para não ouvir o ronco dele(a)', price: 80.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Tampão+de+Ouvido' },
            { id: 30, name: 'Assadeira', price: 80.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Assadeira' },
            { id: 31, name: 'Potes de armazenamento', price: 85.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Potes' },
            { id: 32, name: 'Lixeira para banheiro', price: 90.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lixeira+banheiro' },
            { id: 33, name: 'Frigideira Antiaderente', price: 99.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Frigideira' },
            { id: 34, name: 'Caixa de ferramentas', price: 105.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ferramentas' },
            { id: 35, name: 'Aluguel de um bebê para treinamento', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Bebê' },
            { id: 36, name: 'Cobertor para a Mayra estar coberta de razão', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cobertor+da+Razão' },
            { id: 37, name: 'Cota #1 - Decoração Casamento', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 38, name: 'Cota #6 - Carne para o churrasco', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 39, name: 'Paciência para a TPM', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=TPM' },
            { id: 40, name: 'Batedeira', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Batedeira' },
            { id: 41, name: 'Conjunto de Potes Herméticos', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Potes+Herméticos' },
            { id: 42, name: 'Ferro de passar', price: 109.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ferro+de+Passar' },
            { id: 43, name: 'Operação Lua de Mel - Cota #02', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 44, name: 'Aparelho de Jantar', price: 180.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aparelho+de+Jantar' },
            { id: 45, name: 'Jogo de Banheiro', price: 119.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Jogo+de+Banheiro' },
            { id: 46, name: 'Jogo Toalha de Banho', price: 179.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Toalhas' },
            { id: 47, name: 'Lixeira para banheiro', price: 90.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lixeira' },
            { id: 48, name: 'Sanduicheira', price: 100.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Sanduicheira' },
            { id: 49, name: 'Taxa pra noiva não jogar o buquê pra sua namorada', price: 130.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Buquê' },
            { id: 50, name: 'Cesta básica feminina', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Produtos=de=limpeza' },
            { id: 51, name: 'Cota #2 - Carne para o churrasco', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 52, name: 'Cota #2 - Decoração Casamento', price: 190.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 53, name: 'Conjunto de peneiras', price: 40.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Peneiras' },
            { id: 54, name: 'Porta Condimentos', price: 60.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Porta+Condimentos' },
            { id: 55, name: 'Tábua para Churrasco', price: 189.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Tábua+de+Churrasco' },
            { id: 56, name: 'Jarra', price: 40.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Jarra' },
            { id: 57, name: 'Aspirador de Pó', price: 269.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aspirador+de+Pó' },
            { id: 58, name: 'Toalha de mesa', price: 55.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Toalha=de=mesa' },
            { id: 59, name: 'Tapete', price: 99.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Tapete' },
            { id: 60, name: 'Cesta básica masculina', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Kit=ferramentas' },
            { id: 61, name: 'Cortina 1', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cortina' },
            { id: 62, name: 'Cota #1 - Carne para o churrasco', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 63, name: 'Cota #3 - Decoração Casamento', price: 130.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 64, name: 'Parte do aluguel do espaço para o casamento', price: 300.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aluguel' },
            { id: 65, name: 'Ventilador', price: 159.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ventilador' },
            { id: 66, name: 'Liquidificador', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Liquidificador' },
            { id: 67, name: 'Mesa', price: 400.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Mesa' },
            { id: 68, name: 'Tábua de Passar', price: 80.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Tábua+de+Passar' },
            { id: 69, name: 'Conjunto de copos', price: 40.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Conjunto+de+copos' },
            { id: 70, name: 'Operação Lua de Mel - Cota #03', price: 220.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 71, name: 'Conjunto Porta Condimentos', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Porta+Condimentos' },
            { id: 72, name: 'Cortina 2', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cortina' },
            { id: 73, name: 'Cota #4 - Decoração Casamento', price: 250.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 74, name: 'Um quarto de aluguel da casa', price: 250.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aluguel' },
            { id: 75, name: 'Jogo de xícaras', price: 99.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Xícaras' },
            { id: 76, name: 'Conjunto de Panelas', price: 299.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Panelas' },
            { id: 77, name: 'Operação Lua de Mel - Cota #04', price: 275.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 78, name: 'Mesa de centro', price: 280.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Mesa+de+Centro' },
            { id: 79, name: 'Panela de Pressão', price: 180.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Panela+de+Pressão' },
            { id: 80, name: 'Cobre-leito Casal', price: 189.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cobre-leito' },
            { id: 81, name: 'Cortina 3', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cortina' },
            { id: 82, name: 'Cota #3 - Carne para o churrasco', price: 300.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 83, name: 'Cota #5 - Decoração Casamento', price: 300.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 84, name: 'Ducha Lorenzetti', price: 173.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ducha' },
            { id: 85, name: 'Cota para um dia de compras', price: 350.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Compras' },
            { id: 86, name: 'Garanta novos filhos para os pais de planta', price: 320.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Plantas' },
            { id: 87, name: 'Operação Lua de Mel - Cota #05', price: 330.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 88, name: 'Churrasqueira', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasqueira' },
            { id: 89, name: 'Panela Elétrica', price: 130.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Panela+Elétrica' },
            { id: 90, name: 'Conjunto para Churrasco', price: 160.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Kit+Churrasco' },
            { id: 91, name: 'Forno Elétrico', price: 420.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Forno+Elétrico' },
            { id: 92, name: 'Operação Lua de Mel - Cota #06', price: 385.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 93, name: 'Climatizador de ar', price: 800.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Climatizador' },
            { id: 94, name: 'Cota #6 - Decoração Casamento', price: 400.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Decoração' },
            { id: 95, name: 'Cota #4 - Carne para o churrasco', price: 400.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 96, name: 'Ventilador', price: 159.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ventilador' },
            { id: 97, name: 'Operação Lua de Mel - Cota #07', price: 440.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' },
            { id: 98, name: 'Rack para sala', price: 456.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Rack' },
            { id: 99, name: 'Ajuda para mobiliar a casa', price: 500.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Mobília' },
            { id: 100, name: 'Cota #5 - Carne para o churrasco', price: 500.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Churrasco' },
            { id: 101, name: 'Meio aluguel da casa', price: 500.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aluguel' },
            { id: 102, name: 'Taxa pra poder falar "ainda da tempo..."', price: 200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Taxa' },
            { id: 103, name: 'Cômoda', price: 375.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cômoda' },
            { id: 104, name: 'Parte do aluguel do espaço para o casamento', price: 600.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aluguel' },
            { id: 105, name: 'Micro-ondas', price: 670.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Micro-ondas' },
            { id: 106, name: 'Mini Processador', price: 150.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Processador' },
            { id: 107, name: 'Lavadora de Alta Pressão', price: 390.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lavadora' },
            { id: 108, name: 'Coifa de Parede', price: 730.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Coifa' },
            { id: 109, name: 'Adote os boletos dos primeiros meses juntos!', price: 750.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Boletos' },
            { id: 110, name: 'Airfryer', price: 500.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Airfryer' },
            { id: 111, name: '1 aluguel da casa', price: 1000.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Aluguel' },
            { id: 112, name: 'Armário de cozinha', price: 800.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Armário=cozinha' },
            { id: 113, name: 'Botijão de gás', price: 250.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Botijão' },
            { id: 114, name: 'AOC Roku TV Smart TV LED 32"', price: 1200.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Smart+TV' },
            { id: 115, name: 'Sofá', price: 1700.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Sofá' },
            { id: 116, name: 'Talheres', price: 120.70, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Talheres' },
            { id: 117, name: 'Máquina de lavar', price: 1250.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lavadora' },
            { id: 118, name: 'Alianças', price: 1700.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Alianças' },
            { id: 119, name: 'Guarda-roupas', price: 1760.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Guarda-roupas' },
            { id: 120, name: 'Lava-louças', price: 1899.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lava-louças' },
            { id: 121, name: 'Geladeira', price: 2199.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Geladeira' },
            { id: 122, name: 'Cama box + colchão', price: 2099.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Cama' },
            { id: 123, name: 'Ar condicionado', price: 1999.90, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Ar-condicionado' },
            { id: 124, name: 'Patrocine a lua de mel', price: 4000.00, image: 'https://placehold.co/400x400/D7CCC8/FFFFFF?text=Lua+de+Mel' }
        ],
        get sortedGifts() {
            const sorted = [...this.gifts];
            switch (this.sortOrder) {
                case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
                case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
                case 'name-asc': return sorted.sort((a, b) => a.name.localeCompare(b.name));
                default: return this.gifts;
            }
        },
        get visibleGifts() {
            return this.sortedGifts.slice(0, this.visibleItemsCount);
        },
        showMore() {
            this.visibleItemsCount += 10;
        },
        selectGift(gift) {
            this.$dispatch('open-gift-modal', { giftDetails: gift });
        },
        formatCurrency(value) {
            if (typeof value !== 'number') return '';
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    }));

    // Lógica do Modal de Presente
    Alpine.data('giftModal', () => ({
        coupleWhatsAppNumber: '5565996243050',
        pixCopied: false,

        formatCurrency(value) {
            if (typeof value !== 'number') return '';
            return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },
        copyPix() {
            const pixKey = document.getElementById('pixKey').innerText;
            navigator.clipboard.writeText(pixKey).then(() => {
                // Mostra a mensagem diretamente no modal
                this.pixCopied = true;
                /*setTimeout(() => {
                    this.pixCopied = false;
                }, 5000);*/
            });
        },
        sendWhatsApp() {
            const gifterName = document.getElementById('gifterName').value;
            const gifterMessage = document.getElementById('gifterMessage').value;
            const gift = this.selectedGift;

            // Checagem para garantir que 'gift' não é undefined
            if (!gift || !gift.name) {
                alert('Ocorreu um erro. Por favor, feche e tente novamente.');
                return;
            }

            let message = `Olá! 😊 Gostaria de presentear vocês com: *${gift.name}* (valor de ${this.formatCurrency(gift.price)}).`;

            if (gifterName) {
                message += `\n\nDe: *${gifterName}*`;
            }

            if (gifterMessage) {
                message += `\n\nMensagem: _${gifterMessage}_`;
            }

            const whatsappUrl = `https://wa.me/${this.coupleWhatsAppNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
    }));

    // Lógica da Galeria de Fotos (Carrossel)
    Alpine.data('gallery', () => ({
        activeIndex: 0,
        autoplay: null,
        images: [
            'images/galeria/2.jpg',
            'images/galeria/4.jpg',
            'images/galeria/6.jpg',
            'images/galeria/7.jpg'
        ],
        init() {
            this.startAutoplay();
        },
        startAutoplay() {
            this.autoplay = setInterval(() => { this.next(); }, 5000);
        },
        stopAutoplay() {
            clearInterval(this.autoplay);
        },
        next() {
            this.activeIndex = (this.activeIndex + 1) % this.images.length;
        },
        prev() {
            this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
        },
        setActive(index) {
            this.activeIndex = index;
            this.stopAutoplay();
            this.startAutoplay();
        }
    }));
});

function sendPresence(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const attending = document.querySelector('input[name="attending"]:checked')?.value;
    const message = document.getElementById('message').value;

    const phoneNumber = "5565996312168"; // coloque o número de WhatsApp dos noivos no formato 55DDDNUMERO

    let text = `*Nome:* ${name}\n*Irá ao evento:* ${attending}`;
    if (message) {
        text += `\n*Mensagem:* ${message}`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    //const url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
}
