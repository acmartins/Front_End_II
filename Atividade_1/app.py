if __name__ == '__main__':

    maiorAltura = 0.00
    menorAltura = 0.00
    mediaAlturaMasculino = 0.00
    pessoasGeneroMasculino = 0
    pessoasGeneroFeminino = 0

    for i in range(0, 4, 1):

      valido = True
      while (valido) :
          try:
              altura = float(input(str(i+1) + " - Digite a altura: "))
              valido = False
          except:
              print("Você digitou um dado invalido")

      valido = True
      while (valido):
          try:
              genero = input(str(i + 1) + " - qual o genero da pessoa (m - masculino / f - feminino): ")
              if (genero.upper() == "M" or genero.upper() == "F"):
                  valido = False
              else:
                  print("Você digitou um dado invalido")
          except:
              print("Você digitou um dado invalido")

      # atualizando a variável maiorAltura
      if altura > maiorAltura:
          maiorAltura = altura

      # inicializando o valor da menor altura caso o contador seja 0(zero)
      if i == 0:
          menorAltura = altura

      # atualizando a variável menorAltura
      if menorAltura > altura:
          menorAltura = altura

      # acumulando a quantidade de pessoas do genero masculino
      if genero.upper() == "M":
        mediaAlturaMasculino = mediaAlturaMasculino + altura
        pessoasGeneroMasculino = pessoasGeneroMasculino + 1
      else :
          # acumulando a quantidade de pessoas do genero feminino
          pessoasGeneroFeminino = pessoasGeneroFeminino + 1

print("A maior altura é: ", maiorAltura)
print("A menor altura é: ", menorAltura)
print("A média da altura das pessoas do genero masculino é: ", (mediaAlturaMasculino / pessoasGeneroMasculino))
print("Número de pessoas do genero feminino é: ", pessoasGeneroFeminino)
