<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="PROYECTO_7_RTC_0"></a>PROYECTO 7 {RTC}</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Proyecto_API_REST_AUTH_1"></a>Proyecto API REST AUTH</h2>
<p class="has-line-data" data-line-start="2" data-line-end="3">Este proyecto es una API REST que proporciona funcionalidad para gestionar usuarios, juegos y consolas. La API incluye autenticación y autorización para asegurar que solo usuarios autorizados puedan realizar ciertas acciones.</p>
<h3 class="code-line" data-line-start=4 data-line-end=5 ><a id="Requisitos_4"></a>Requisitos</h3>
<ol>
<li class="has-line-data" data-line-start="5" data-line-end="6">Node.js</li>
<li class="has-line-data" data-line-start="6" data-line-end="7">MongoDB</li>
<li class="has-line-data" data-line-start="7" data-line-end="9">Dependencias del proyecto (ver <code>package.json</code>)</li>
</ol>
<h3 class="code-line" data-line-start=9 data-line-end=10 ><a id="Scripts_9"></a>Scripts</h3>
<pre><code class="has-line-data" data-line-start="11" data-line-end="14">npm start: Inicia el servidor.
npm run dev: Inicia el servidor con nodemon para desarrollo.
</code></pre>
<h2 class="code-line" data-line-start=14 data-line-end=15 ><a id="Endpoints_14"></a>Endpoints</h2>
<h2 class="code-line" data-line-start=15 data-line-end=16 ><a id="Usuarios_15"></a>Usuarios</h2>
<h3 class="code-line" data-line-start=16 data-line-end=17 ><a id="POST_apiv1usersregister_16"></a>POST /api/v1/users/register:</h3>
<ul>
<li class="has-line-data" data-line-start="17" data-line-end="18">Registra un nuevo usuario.</li>
</ul>
<pre><code class="has-line-data" data-line-start="19" data-line-end="27">{
  &quot;email&quot;: &quot;string&quot;,
  &quot;username&quot;: &quot;string&quot;,
  &quot;password&quot;: &quot;string&quot;,
  &quot;birthYear&quot;: &quot;number&quot;,
  &quot;profileImage&quot;: &quot;string&quot;
}
</code></pre>
<h3 class="code-line" data-line-start=28 data-line-end=29 ><a id="POST_apiv1userslogin_28"></a>POST /api/v1/users/login:</h3>
<ul>
<li class="has-line-data" data-line-start="29" data-line-end="30">Inicio de sesión de los usuarios.</li>
</ul>
<pre><code class="has-line-data" data-line-start="31" data-line-end="36">{
  &quot;username&quot;: &quot;string&quot;,
  &quot;password&quot;: &quot;string&quot;
}
</code></pre>
<h3 class="code-line" data-line-start=37 data-line-end=38 ><a id="GET_apiv1users_37"></a>GET /api/v1/users:</h3>
<ul>
<li class="has-line-data" data-line-start="38" data-line-end="39">Obtiene todos los usuarios.</li>
</ul>
<h3 class="code-line" data-line-start=39 data-line-end=40 ><a id="PUT_apiv1usersadminid_39"></a>PUT /api/v1/users/admin/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="40" data-line-end="42">Asigna o quita el rol de administrador a un usuario (requiere autenticación y rol de administrador).</li>
</ul>
<pre><code class="has-line-data" data-line-start="43" data-line-end="47">{
  &quot;role&quot;: &quot;admin&quot; | &quot;user&quot;
}
</code></pre>
<h3 class="code-line" data-line-start=48 data-line-end=49 ><a id="PUT_apiv1usersid_48"></a>PUT /api/v1/users/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="49" data-line-end="51">Edita un usuario (requiere autenticación).</li>
</ul>
<h3 class="code-line" data-line-start=51 data-line-end=52 ><a id="DELETE_apiv1usersid_51"></a>DELETE /api/v1/users/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="52" data-line-end="53">Elimina un usuario (requiere autenticación y rol de administrador).</li>
</ul>
<h2 class="code-line" data-line-start=55 data-line-end=56 ><a id="Juegos_55"></a>Juegos</h2>
<h3 class="code-line" data-line-start=56 data-line-end=57 ><a id="POST_apiv1gamesadd_56"></a>POST /api/v1/games/add:</h3>
<ul>
<li class="has-line-data" data-line-start="57" data-line-end="58">Añade un nuevo juego (requiere autenticación).</li>
</ul>
<pre><code class="has-line-data" data-line-start="59" data-line-end="66">{
  &quot;title&quot;: &quot;string&quot;,
  &quot;releaseYear&quot;: &quot;number&quot;,
  &quot;img&quot;: &quot;string&quot;,
  &quot;platform&quot;: &quot;ObjectId&quot;
}
</code></pre>
<h3 class="code-line" data-line-start=67 data-line-end=68 ><a id="GET_apiv1games_67"></a>GET /api/v1/games:</h3>
<ul>
<li class="has-line-data" data-line-start="68" data-line-end="70">Obtiene todos los juegos.</li>
</ul>
<h3 class="code-line" data-line-start=70 data-line-end=71 ><a id="PUT_apiv1gamesid_70"></a>PUT /api/v1/games/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="71" data-line-end="73">Edita un juego (requiere autenticación).</li>
</ul>
<h3 class="code-line" data-line-start=73 data-line-end=74 ><a id="DELETE_apiv1gamesid_73"></a>DELETE /api/v1/games/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="74" data-line-end="76">Elimina un juego (requiere autenticación).</li>
</ul>
<h2 class="code-line" data-line-start=76 data-line-end=77 ><a id="Consolas_76"></a>Consolas</h2>
<h3 class="code-line" data-line-start=77 data-line-end=78 ><a id="POST_apiv1consolesadd_77"></a>POST /api/v1/consoles/add:</h3>
<ul>
<li class="has-line-data" data-line-start="78" data-line-end="80">Añade una nueva consola (requiere autenticación).</li>
</ul>
<pre><code class="has-line-data" data-line-start="81" data-line-end="87">{
  &quot;name&quot;: &quot;string&quot;,
  &quot;releaseYear&quot;: &quot;number&quot;,
  &quot;img&quot;: &quot;string&quot;
}
</code></pre>
<h3 class="code-line" data-line-start=88 data-line-end=89 ><a id="GET_apiv1consoles_88"></a>GET /api/v1/consoles:</h3>
<ul>
<li class="has-line-data" data-line-start="89" data-line-end="91">Obtiene todas las consolas.</li>
</ul>
<h3 class="code-line" data-line-start=91 data-line-end=92 ><a id="PUT_apiv1consolesid_91"></a>PUT /api/v1/consoles/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="92" data-line-end="94">Edita una consola (requiere autenticación).</li>
</ul>
<h3 class="code-line" data-line-start=94 data-line-end=95 ><a id="DELETE_apiv1consolesid_94"></a>DELETE /api/v1/consoles/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="95" data-line-end="97">Elimina una consola (requiere autenticación).</li>
</ul>
<h2 class="code-line" data-line-start=97 data-line-end=98 ><a id="Middleware_de_Autenticacin_97"></a>Middleware de Autenticación</h2>
<p class="has-line-data" data-line-start="98" data-line-end="100"><code>isLogedIn</code>: Verifica si el usuario está autenticado mediante un token JWT.<br>
<code>isAdmin</code>: Verifica si el usuario tiene rol de administrador.</p>
