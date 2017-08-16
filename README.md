# learn_react_native

# Ketika running di device dan muncul error cek:
https://stackoverflow.com/a/45409223

# Referensi
http://www.kodingindonesia.com/tutorial-react-native-bahasa-indonesia/
https://www.youtube.com/watch?v=OgLaGWBI3Mw&list=PL-Ra8U0JXtVWmizDdKf7WPubFkpdHv6vS


# State
Semacam session yang pendefinisiannya di dalam class

<h3>SET</h3>

-> STATIC
```
this.state ={
      nama:'irul'
}
```

-> DYNAMIC
```
this.setState({nama:text})
```

<h3>GET</h3>

```
{this.state.nama}
```

# Props 
Semacam session yang pendefinisiannya di luar class

<h3>SET</h3>

```
<Object_gue nama="joni"/>
```
<h3>GET</h3>

```
{this.props.nama}
```


# LEARN
<b>1. saat Instansiasi object, awalan nama object harus huruf besar contoh</b>

```
import Gs from './components/global_state';
```

harus "Gs" tidak bole "gs"

<b>2. untuk set vertical/horizontal sebuah komponen gunakan flexbox</b><br/>
https://facebook.github.io/react-native/docs/flexbox.html

