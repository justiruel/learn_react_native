# learn_react_native

# Ketika running di device dan muncul error cek:
https://stackoverflow.com/a/45409223

# Saat membuat project baru misal "react-native init reactNavigate" lalu terjadi error (gagal install) maka gunakan perintah

```
npm cache clear --force
```

# Bila bertemu error berkaitan dengan "babel-preset-react-native", lakukan :

```
npm uninstall --save babel-preset-react-native
npm install --save babel-preset-react-native@2.1.0
```


# Referensi
<ul>
      <li>http://www.kodingindonesia.com/tutorial-react-native-bahasa-indonesia/</li>
      <li>https://www.youtube.com/watch?v=OgLaGWBI3Mw&list=PL-Ra8U0JXtVWmizDdKf7WPubFkpdHv6vS</li>
      <li>https://facebook.github.io/react-native/docs/navigation.html</li>
      <li>https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3</li>
	  
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

# Start Remote Js Debugging avd (android virtual device)
```
Press ⌘+D on iOS simulator, ⌘+M on Android emulator
```
ref : https://codeburst.io/react-native-debugging-tools-3a24e4e40e4

# Genymotion
saat ingin menggunakan genymotion sebagai emulator : 
- buka genymotion
- pilih setting -> adb -> use custom android sdk tools -> browse Android SDK nya, contoh : D:/Android/sdk
- pilih start untuk menjalankan emulator
- react-native run-android

# Double R / Refresh emulator tidak berfungsi
- Buka Android Virtual Device/AVD Manager
- pilih salah satu emulator
- edit
- check hardware keyboard present

# Import javascript
## Perbandingan 1 (import method)
### ES5
```
var add = require('lib').add; //method add class lib
console.log(add(1,2));
```
### ES6
```
import {add} from 'lib';
console.log(add(1,2));
```
## Perbandingan 2 (import whole class)
### ES5
```
var libku = require('lib'); 
```
### ES6
```
import libku from 'lib';
```


# LEARN
<b>1. saat Instansiasi object, awalan nama object harus huruf besar contoh</b>

```
import Gs from './components/global_state';
```

harus "Gs" tidak bole "gs"

<b>2. untuk set vertical/horizontal sebuah komponen gunakan flexbox</b><br/>
https://facebook.github.io/react-native/docs/flexbox.html

<b>Rubah Bundle ID dari aplikasi</b><br/>
https://stackoverflow.com/a/44481467
https://www.npmjs.com/package/react-native-rename

<b>Lokasi dari npm global</b>
- C:\Users\Iruel\AppData\Roaming\npm\node_modules
- npm list -g --depth=0

