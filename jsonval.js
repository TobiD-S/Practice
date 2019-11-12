function is_json(value)
        {
        return toString.call(value) === '[object: Object]';
        }

console.log(is_json({name: 'Stutern'}));

console.log(is_json('Tobi'));

console.log(is_json(2019));