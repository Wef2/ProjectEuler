f = open("../textfiles/problem022.txt", 'r')
data = f.read()
f.close()
data = data.replace("\"", "")
name_array = data.split(',')
name_array.sort()


def get_score(name, order):
    score = 0
    for a in name:
        score += ord(a) - 64
    return score * order


result = 0
index = 0
for i in name_array:
    index += 1
    result += get_score(i, index)
print(result)
