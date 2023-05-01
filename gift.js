/* Uma loja presenteia suas clientes com descontos (cashback) progressivos de acordo com suas compras. 
Desta forma, para compras mensais de até R$ 250 reais, é feita a conversão (geração) de cashback de 5%; 
Para compras acima de R$ 250 até R$ 500, 7% de cashback; De R$ 500 até R$ 750, 8% de cashback; 
E para compras acima de R$ 750 é aplicado primeiramente as regras anteriores até R$ 750 do valor em cada faixa, e 25% sobre o valor acima de R$ 750. 
Operações de cashbacks progressivos têm o objetivo de incentivar as suas clientes a comprarem mais e ao mesmo tempo serem compensadas por isso.

a)Implemente um software para auxiliar no cálculo do cashback mensal de suas clientes (devem ser lidos N compras Nome Cliente e Valor Compras). 

b)Informe quanto foi o faturamento total (soma das vendas); Quanto foi distribuído em cashback;
Qual o valor em reais e percentual investido em cashback pela loja; Maior, menor e valor médio pago em cashback.*/ 

import {obter_numero_positivo, mostrar_texto, obter_texto} from './utils.js'

function main() {
    
    // Constantes gerais
    const clientes_totais = obter_numero_positivo("Quantos clientes compraram na PatroInterprise esse mês? >> ")
   
    let valor_compras_totais_loja = 0
    let compras_totais_clientes = 0
    let cashback_total_clientes = 0
    let nome_cliente = "default"
    let cliente_atual = 0

    //Para cada cliente 
    while ((nome_cliente.toUpperCase() != "DONO") && (cliente_atual != clientes_totais)) {  
        cliente_atual++
        nome_cliente = obter_texto(`Nome do cliente >> `)
        let compras_mensais = obter_numero_positivo("Quantas compras você fez esse mês na PatroInterprise? >> ")
    
        mostrar_texto(`Olá ${nome_cliente}, você fez ${compras_mensais} compras. Diga o valor de cada compra `)
        
        let atual = 1
        let valor_compras = 0
        let quantidade_compras = compras_mensais
        let valor_compras_clientes = 0
        let cashback = 0
        let cashback_total = 0
        compras_totais_clientes = compras_totais_clientes + compras_mensais
        

        // Para cada compra 
        while(atual <= quantidade_compras) {
            valor_compras = obter_numero_positivo(`Digite o valor da compra ${atual} >> `)
            
            if (valor_compras < 250) {
                cashback = (valor_compras * 0.05)
            
            }else if (valor_compras < 500) {
                cashback = (250 * 0.05) + ((valor_compras - 250) * 0.07)
                
            }else if (valor_compras < 750) {
                cashback = (250 * 0.05) + (250 * 0.07) + ((valor_compras - 500) * 0.08)
            
            }else if (valor_compras > 750) {
                cashback = (250 * 0.05) + (250 * 0.07) + (250 * 0.08) + ((valor_compras - 750) * 0.25)
            
            } 
            atual++
            valor_compras_clientes = valor_compras_clientes + valor_compras
            cashback_total = cashback_total + cashback
        }
        
        cashback_total_clientes = cashback_total_clientes + cashback_total
        valor_compras_totais_loja = valor_compras_totais_loja + valor_compras_clientes
        
        mostrar_texto(`>> Você recebeu ${cashback_total.toFixed(2)} de cashback`)
        mostrar_texto(`>> Você gastou R$ ${valor_compras_clientes} em compras`)
       
    }
    if ((nome_cliente.toUpperCase() === "DONO") && (compras_totais === 0) ) {
        return `>> A loja não fez vendas esse mês`

    }else 

    mostrar_texto(`>> Houve o atendimento de ${clientes_totais} clientes`)
    mostrar_texto(`>> A loja efetivou ${compras_totais_clientes} vendas esse mês`)
    mostrar_texto(`>> O lucro mensal foi de R$ ${valor_compras_totais_loja.toFixed(2)} `)
    mostrar_texto(`>> Os clientes receberam R$ ${cashback_total_clientes.toFixed(2)} de cashback, representando ${((cashback_total_clientes * 100) / valor_compras_totais_loja).toFixed(2)}% do faturamento`) 
}

main()