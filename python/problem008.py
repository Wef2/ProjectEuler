value = '73167176531330624919225119674426574742355349194934'
value += '96983520312774506326239578318016984801869478851843'
value += '85861560789112949495459501737958331952853208805511'
value += '12540698747158523863050715693290963295227443043557'
value += '66896648950445244523161731856403098711121722383113'
value += '62229893423380308135336276614282806444486645238749'
value += '30358907296290491560440772390713810515859307960866'
value += '70172427121883998797908792274921901699720888093776'
value += '65727333001053367881220235421809751254540594752243'
value += '52584907711670556013604839586446706324415722155397'
value += '53697817977846174064955149290862569321978468622482'
value += '83972241375657056057490261407972968652414535100474'
value += '82166370484403199890008895243450658541227588666881'
value += '16427171479924442928230863465674813919123162824586'
value += '17866458359124566529476545682848912883142607690042'
value += '24219022671055626321111109370544217506941658960408'
value += '07198403850962455444362981230987879927244284909188'
value += '84580156166097919133875499200524063689912560717606'
value += '05886116467109405077541002256983155200055935729725'
value += '71636269561882670428252483600823257530420752963450'

result = 0

for i in range(0, 988):
    product = 1
    for j in range(0, 13):
        product *= int(value[i + j:i + j + 1])
    if result < product:
        result = product

print(result)