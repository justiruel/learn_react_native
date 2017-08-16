# learn_react_native

# Ketika running di device dan muncul error cek:
https://stackoverflow.com/a/45409223

# Referensi
http://www.kodingindonesia.com/tutorial-react-native-bahasa-indonesia/
https://www.youtube.com/watch?v=OgLaGWBI3Mw&list=PL-Ra8U0JXtVWmizDdKf7WPubFkpdHv6vS


# State
Semacam session yang pendefinisiannya di dalam class

<h1>SET</h1>

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

<h1>GET</h1>

```
{this.state.nama}
```

# Props 
Semacam session yang pendefinisiannya di luar class

<h1>SET</h1>
```
<Object_gue nama="joni"/>
```
<h1>GET</h1>
```
{this.props.nama}
```
