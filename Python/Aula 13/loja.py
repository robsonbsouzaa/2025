import pandas as pd

dados = {
    'Produto':['Mouse', 'Teclado', 'Monitor','Cabo HDMI'],
    'Preço':[50,120,900,35],
    'Estoque':[20, 15, 8, 50]
}
df = pd.DataFrame(dados)

#Criar nova coluna
df['Total'] = df['Preço'] * df['Estoque']

# Filtrar produtos acima de R$100
filtro = df[df['Preço'] > 100]

#Salvar em CSV
df.to_csv("tabela_completa.csv",index=False)
filtro.to_csv("produtos_100.csv", index=False)

print("Tabela Completa:\n",df)
print("\nProdutos acima de R$ 100: \n", filtro)
print("\nArquivo CSV gerado com sucesso!")