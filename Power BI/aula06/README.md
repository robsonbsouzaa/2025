# Aula 06

## Finalização

## Projeto Carro

Vamos desenvolver utilizando a pasta **Projeto Carro** o seguinte dashboard 
<div align = "center">
  
<img width="800" height="auto" alt="image" src="https://github.com/user-attachments/assets/b6a2ec77-e96c-4614-8f63-0a02e0cf741b" />
<img width="800" height="auto" alt="image" src="https://github.com/user-attachments/assets/02da776c-3f9a-4172-8a77-5cd73a0bfac4" />

</div>
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
