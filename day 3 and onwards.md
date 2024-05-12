to learn
a) bundler (vite, webpack, parcel)
b) diffing algo
c) polyfills
d) classBased Components vs functional Components
e) flex vs float
f) map vs forEach
g) react fibre architecture

dist folder is responsible for minification
reactElm -> Object -> virtualDOM -> realDOM
html document and js dom

JSX (JavaScript XML, formally JavaScript Syntax eXtension) is an XML-like extension to the JavaScript language syntax.

jsx -> reactElm -> Object -> virtualDOM -> realDOM
jsx is interpreted by babel which does jsx -> reactElm
HTML tag + attributes + innerContent = HTML elm
react component is a function which returns jsx
{head4()} is the same as <Head4 /> is the same as <Head4> <Head4 />
var allows re-assignment and re-declaration
bundleer already has react

jsx elm like <Card /> is a function, its argument is an object
viz
const Card = (x) => console.log(x)
OUTPUT = {}
normal functions would have given undefined

DAY 4 and 5 =====================================================================================

to learn
a) raect fibre architecture
b) diffing algo
c) reconciliation
d) one way data binding in react
e) array destructuring vs object destructuring
f) why are props like objects in cards = as name matters to them and not position
g) why hooks use arrays = as position matters to them
h) life cycle methods of react
i) something not taught in useState(Updating state based on the previous state ) and useEffect === HW

we manipulate the HTML doc with JS using documentAPI or simply DOM
js way of import-export is old way viz module.exports with require
es6 way is new viz import xyz from xyz
named import has fileName in {} while importing, default does not
also named export mein name must be same, default mein its chill

key decides what things are to be re-rendered, anything unique has to be st as the key
key is defined while passing arguments in a component

for react, every variable is a normal variable, its change does not affect rendering
make a special variable using useState, so react knows if this variable changes, re-rendering has to be done

const [xyz, setXyz] = useState(); aesa we usually write
but we can also write like this
const abc = useState();
hence abc[0] is now xyz and abc[1] is now setXyz

dummyjson

json.parse
json.stringify BOTH ARE SYNCHRONOUS

res.json is ASYNCHRONOUS
then-catch came first
async-await is then-catch under the hood
if we clg data w/o strinfigying, it wont be rendered in UI

      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images":

start
end
hello from useEffect
@@@@@SHOULD HAVE BEEN@@@@@@@@@@@@@@@@
start
hello from useEffect
end
THIS HAPPENS AS useEffect IS A CALLBACK

3cases in useEffect
a) depArr has something
b) depArr has nothing
c) depArr does not exist
Initially all 3 will render,
then khali depArr vala will not render if something changes, STRANGE
no dependency will be rendered every time, koi bhi depArr ka variable kahi bhi change ho toh, SAARVaJANIK
hence khali depArr is called only once, at start

DAY 6 =====================================================================================
to learn
a) SPA
b) optional chaining
c) useParams
d) prop drilling

1. baar baar poora properties as parameter pass karne se avcha hai, props use krlo we know that but, main script file mein hi ek baar ye propertyies pass krna, fir props likh dena is genius

app(ie. main script file) has router inside it and not the opposite, this means hooks like useNavigate() have to be used inside router and not outside of it.
Also useNavigate has to be used by making a variable and then the var is to be called, say
const navigate = useNavigate(), then navigate("/xyzAddress")

since app ke andar router hai, so agar koi function hai jo useNavigate use krta hai toh usey we can not define under app.js, toh 1) vali samajhdari is not possible

<!-- <a> tag has 'href' --> full render
<!-- <Link> tag has a 'to' -->react render

DAY 7 =====================================================================================
to learn
a) mutability => react does not re-render if shallow copies of non-primitive data types are changed, eg. an obj2 is created from obj1 but obj2 is a shallow copy of obj1, ie. has same memory address as obj1, then if obj2 is changed and we set again obj2 as obj1 viz. setObj1 ( obj2 ) , then re-rendering will not happen.
So we can do this ----->setObj1 ( {...obj2}) , this way a deep copy obj2 is created.
Dnt forget the CURLY BRACES

b) consumer-provider pattern in useContext
