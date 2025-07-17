# 🎵 Gestor de Tracks

Una aplicación web full-stack para gestionar una colección de canciones (tracks) musicales. Permite crear, leer, actualizar y eliminar tracks con información detallada sobre cada canción.

## 📋 Características

- ✨ **CRUD Completo**: Crear, leer, actualizar y eliminar tracks
- 🎨 **Interfaz Moderna**: Diseño responsive con Bootstrap y animaciones CSS
- 🔄 **Actualización en Tiempo Real**: Los cambios se reflejan instantáneamente sin necesidad de recargar
- 📱 **Responsive Design**: Compatible con dispositivos móviles y desktop
- 🎭 **Edición Inline**: Edita tracks directamente en la lista
- 📊 **Ordenamiento Múltiple**: Ordena por título (A-Z, Z-A), reproducciones o mantén el orden original
- 🎯 **API RESTful**: Backend bien estructurado con Spring Boot
- 🔍 **Interfaz Intuitiva**: Controles de ordenamiento visuales con iconos descriptivos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **Bootstrap 5** - Framework CSS para diseño responsive
- **Axios** - Cliente HTTP para comunicación con la API
- **Font Awesome 6** - Iconos vectoriales y símbolos
- **CSS3** - Animaciones y efectos visuales personalizados

### Backend
- **Spring Boot 3.5.3** - Framework de Java para desarrollo de aplicaciones
- **Spring Data JPA** - Abstracción para acceso a datos
- **H2 Database** - Base de datos en memoria para desarrollo
- **Maven** - Gestión de dependencias y construcción del proyecto

## 🏗️ Estructura del Proyecto

```
tracks/
├── backend-tracks/          # Aplicación Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/example/tracks/
│   │   │   │       ├── controller/     # Controladores REST
│   │   │   │       ├── dto/            # Objetos de transferencia de datos
│   │   │   │       ├── model/          # Entidades JPA
│   │   │   │       ├── repository/     # Repositorios de datos
│   │   │   │       └── service/        # Lógica de negocio
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
├── frontend-tracks/         # Aplicación React
│   ├── public/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── TrackForm.jsx
│   │   │   └── TrackList.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- **Java 17** o superior
- **Node.js 14** o superior
- **npm** o **yarn**
- **Maven** (opcional, incluido wrapper)

### Backend (Spring Boot)

1. Navega al directorio del backend:
```bash
cd backend-tracks
```

2. Ejecuta la aplicación:
```bash
# Windows
.\mvnw.cmd spring-boot:run

# Linux/Mac
./mvnw spring-boot:run
```

3. La API estará disponible en `http://localhost:8080`

### Frontend (React)

1. Navega al directorio del frontend:
```bash
cd frontend-tracks
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia la aplicación:
```bash
npm start
```

4. La aplicación estará disponible en `http://localhost:3000`

## 📚 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/tracks` | Obtiene todos los tracks |
| `GET` | `/tracks/sorted` | Obtiene tracks ordenados por título |
| `POST` | `/tracks` | Crea un nuevo track |
| `PUT` | `/tracks/{id}` | Actualiza un track existente |
| `DELETE` | `/tracks/{id}` | Elimina un track |

### Ejemplo de Track JSON
```json
{
  "title": "Bohemian Rhapsody",
  "albumName": "A Night at the Opera",
  "releaseDate": "1975-10-31",
  "playCount": 1500000
}
```

## 🎮 Uso de la Aplicación

1. **Agregar Track**: Completa el formulario en el panel izquierdo y presiona "Guardar Track"
2. **Ver Tracks**: Los tracks aparecen automáticamente en el panel derecho
3. **Ordenar Tracks**: Utiliza los botones de ordenamiento en la cabecera de la lista:
   - 📄 **Original**: Mantiene el orden de creación
   - 🔤 **A-Z**: Ordena alfabéticamente por título (ascendente)
   - 🔤 **Z-A**: Ordena alfabéticamente por título (descendente)
   - 📊 **Por Reproducciones**: Ordena por número de reproducciones (mayor a menor)
4. **Editar Track**: Haz clic en "Editar" para modificar un track existente
5. **Eliminar Track**: Haz clic en "Eliminar" para borrar un track

## 🗄️ Base de Datos

La aplicación utiliza H2 Database en memoria para desarrollo. Los datos se reinician cada vez que se reinicia la aplicación.

- **Consola H2**: `http://localhost:8080/h2-console`
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Usuario**: `sa`
- **Contraseña**: (vacío)

## 🎨 Características de Diseño

- **Tema Musical**: Iconos y colores relacionados con música
- **Gradiente de Fondo**: Diseño visual atractivo
- **Animaciones CSS**: Efectos de hover y flotación
- **Cards Responsivas**: Layout adaptable a diferentes tamaños de pantalla
- **Controles de Ordenamiento**: Botones intuitivos con estados activos
- **Feedback Visual**: Estados de carga y mensajes de error
- **Iconografía Consistente**: Font Awesome para una experiencia visual coherente

## 🔧 Configuración CORS

El backend está configurado para permitir requests desde `http://localhost:3000` (frontend de desarrollo).

## 📝 Notas de Desarrollo

- El frontend está configurado con **Hot Reload** para desarrollo ágil
- El backend incluye **DevTools** para reinicio automático
- La base de datos se inicializa automáticamente con el esquema
- **Funcionalidad de ordenamiento** implementada tanto en frontend como backend
- **Estado de UI** persistente para opciones de ordenamiento
- **Validación de formularios** en tiempo real

## 🚀 Despliegue

Para despliegue en producción:

1. **Backend**: Construir JAR ejecutable con `mvn clean package`
2. **Frontend**: Construir build optimizado con `npm run build`
3. **Base de Datos**: Configurar PostgreSQL o MySQL en `application.properties`

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Axel Rodriguez** - [AxelRodCh](https://github.com/AxelRodCh)

## 🙏 Agradecimientos

- Spring Boot community
- React community
- Bootstrap team
- Font Awesome icons

---

⭐ **¡No olvides darle una estrella al proyecto si te gustó!** ⭐
