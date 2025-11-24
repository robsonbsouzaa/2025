import pandas as pd

dados = {
    'Nome': ['Alice','Bob','Carlos'],
    'Idade':[25,30,35],
    'Salario':[5000, 6000, 7000]
}
df = pd.DataFrame(dados)
df['Bonus'] = df['Salario']*0.1
print(df)
#Excluir uma coluna
df = df.drop(columns=['Bonus'])
print(df)
# print(df[df['Idade'] > 28])