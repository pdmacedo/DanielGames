# Proyecto final 'Daniel Games'

En este proyecto podrán encontrar un e-commerce dedicado a la venta de videojuegos. Esta les ofrece un menú principal con toda la variedad de juegos y de todas las consolas, si quieren saber información sobre un juego en específico podrán darle a la opción de 'Ver más' y encontrar información como Rating, Precio o también poder adicionarlo a su carro de compras. Para quienes van enfocados en adquirir un juego de una consola en específico contarán con un menú de nuestras consolas disponibles. Por último tienen la opción de ver su carro de compras y ahí detallado todo lo que se agregó junto con el precio total y la cantidad de items. De ser necesario podrá eliminar elementos que se hayan agregado al carro anteriormente, así como vaciar el carro por completo o si lo desea finalizar la compra rellenando el pequeno formulário con sus datos.  (https://github.com/pdmacedo/DanielGames).

## Daniel Macedo como desarrollador

Llevo estudiando programación hace ya algun tiempo, fue mi opción desde la universidad la cual tuve que dejar por salir de mi país y emigrar, pero ahora he retomado este mundo estudiando herramientas como C#, CSS, JavaScript, HTML, SqlServer, React y futuramente Node JS. Ya con todos estos conocimientos espero poder encontrar mi primer empleo en esta área de programación y continuar creciendo más.

## Librerías que utilicé en el proyecto

### `React`

La librería React de JavaScript es la base de este proyecto ya que con ella fue posible la creación de interfaces interactivas de una forma más sencilla. Es la encargada de poder renderizar nuestros componentes de una forma más eficiente cuando sus datos cambian y así obtener un código más fácil de leer.

### `react-router-dom`

Esta librería fue utilizada para poder tener navegación entres los componentes de la app y así poder usar sus hooks, como también poder navegar entre ellos enviando valores como parámetros o también estados.

### `Bootstrap`

La mayoría de la maquetación de la app fue toda utilizada desde Bootstrap apoyándome más que todo de las div con clase container o row, así como también de tablas.

### `Validator`

Utilizada en el formulário de 'Finalizar compra' para poder confirmar los inputs de nombre, apellido, teléfono y email, para así minimizar errores de guardado en la firestore.

### `Toastify`

Esta librería es utilizada en la sección de detalle del producto (ItemCount.js), una vez que se ultrapasa el stock disponible (5) o una vez que se adiciona el juego al carro se le adicionó un toast para alertar ambas acciones, al igual que en el formulário de finalizar compra, cuando hay algún dato inválido o la compra se ejecuta con éxito también sale un toast.

### `jQuery`

Esta libreria solo fue utilizada (CartWidget.js) para poder realizar un efecto de fadeOut en el mensaje de agradecimiento posterior a la compra, el cual desaparece pasado 6 segundos.

### `Firebase`

Firebase fue adicionado para poder guardar los valores de las compras en la firestore, estos adicionarían los productos comprados junto con los datos del formulário sobre el cliente. También fue útil para buscar información a la firestore y filtrarla como herramientas como query, where, entre otras.

## Comentarios sobre el código

* En el componente itemDetailContainer entre la linea 57 a 64 utilicé un condicionante sobre si traer el nombre del juego de la firestore o desde la API, si este era encontrado en la firestore me lo traía desde ahí, si no, lo buscaba de la API. Por qué lo hice de esta forma? Porque la lista de juegos era muy extensa para adicionarlas todas en la firestore y le pregunté a Franco si podía realizarlo así y me comentó que pensaba que si, pero lo consultaría contigo, pero nunca me dio un feedback sobre esto y me pareció que de igual forma estaba bien aplicado y por eso decidí dejarlo así. 

* La única cosa que le dejé comentarios fue a la hoja de estilos.css para poder diferenciar en que parte de la app estaban esos estilos adicionados y así poder guiarse bien cuando un cambio fuese necesário.

* Otro detalle que podría comentar es la condición que puse en el Nav.js para cuando el carro no tuviese productos no salir el número cero, si no solo el icon, algo mas limpio a la vista.

* El CartContext fue quizás la parte que en principio me costó entender bien como utilizarlo, pero una vez que conseguí empezar a implementarlo fui viendo un poco la lógica de esto y me parece que fue bien utilizada.

