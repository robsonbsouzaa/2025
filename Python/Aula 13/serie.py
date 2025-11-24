import pandas as pd

dados = [10,20,30,40]
serie = pd.Series(dados, index=['a','b','c','d'])
print(serie[serie > 15])

#Impressão Multiplicado por 2
print(serie * 2)