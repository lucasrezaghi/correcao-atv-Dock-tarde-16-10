nota1 = float(input('insira a primeira nota: '))
nota2 = float(input('insira a seunda nota: '))
nota3 = float(input('insira a tercaira nota: '))
nota4 = float(input('insira a quarta nota: '))

media = (nota1 + nota2 + nota3 + nota4) / 4
print(f'a sua media é {media}')

if media >=  8:
    print('aprovado')
else: 
    print('reprovado')