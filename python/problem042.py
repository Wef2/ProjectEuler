f = open("../textfiles/problem042.txt", 'r')
data = f.read()
f.close()
data = data.replace("\"", "")
word_array = data.split(',')

triangular_number = []


def set_triangular(n):
    triangular_number.append((n * n + n) / 2)


for i in range(1, 20):
    set_triangular(i)


def get_score(word):
    score = 0
    for a in word:
        score += ord(a) - 64
    return score


result = 0
for i in word_array:
    if triangular_number.count(get_score(i)) == 1:
        result += 1
print(result)
