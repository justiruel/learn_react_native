# learn_react_native

# Ketika running di device dan muncul error cek:
https://stackoverflow.com/a/45409223

# Referensi
<ul>
      <li>http://www.kodingindonesia.com/tutorial-react-native-bahasa-indonesia/</li>
      <li>https://www.youtube.com/watch?v=OgLaGWBI3Mw&list=PL-Ra8U0JXtVWmizDdKf7WPubFkpdHv6vS</li>
</ul>


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
