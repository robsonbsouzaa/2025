# Aula 06

### Finalização

## Atividade

| Contextualização                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Realizar a Dashboard de uma loja chamada ChocoFino, para controle de vendas nas localidades da loja
<img width="606" alt="image" src="Captura de tela 2024-11-30 092018.png">


| Desafio                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- |
| Importe os dados do arquivo **Base_vendas.xlsx**                                                            
| Transforme os dados com Power Query                                                                                          
| Faça os relacionamento de tabelas 
| O template da dashboard é o arquivo **Background.jpg**

## **Fórmulas**


| **Tabela**   | **Nome**  |**Fórmula**       |
|--------------|-----------|------------------|
| Lojas    | Preço Medio pro Venda  | DIVIDE([Receita],[Qtd Vendida])                                                          
| Lojas    | Receita |SUM(Vendas[Valor Total])                                                                                 
| Vendas   | Qtd Vendida |SUM(Vendas[Quantidade])


| Entregas:                                                            |
| -------------------------------------------------------------------- |
| Apresente ao professor o arquivo com as análises solicitadas. 
| Enviar atividades no link: https://forms.gle/VsM1XpDtd2sLYSX69 

#
