## Funciones base

Combinar 2 funciones para crear otra
```
compose :: (b -> c) -> (a -> b) -> a -> c
h = compose(g, f)
h(x) === g(f(x))
```

---

Filtrar elementos
```
filter :: (a -> Bool) -> [a] -> [a]
filter(() => true, [1, 2, 3]) === [1, 2, 3]
filter(() => false, [1, 2, 3]) === []
```

---

Crear un nuevo array aplicando aplicando una funcion
```
map :: (a -> b) -> [a] -> [b]
map((x) => x + 1, [1, 2, 3]) === [2, 3, 4]
```

---

Combinar todos los elements del array para llegar a 1 valor
```
reduce :: (a -> b -> a) -> a -> [b] -> a
reduce((x, y) => x + y, 0, [1, 2, 3]) === 6
```
