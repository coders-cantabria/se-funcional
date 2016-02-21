def map(mapper, iterable):
    return [mapper(i) for i in iterable]


def filter(filterer, iterable):
    return [i for i in iterable if filter(i)]


def reduce(reducer, accumulator, iterable):
    iable = iter(iterable)

    def _r(acc):
        try:
            return _r(reducer(acc, next(iable)))
        except StopIteration:
            return acc

    return _r(accumulator)


def compose(*fs):
    return reduce(_compose, lambda x: x, fs)


def _compose(a, b):
    return lambda x: a(b(x))
