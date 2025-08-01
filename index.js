<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portofolio Fawaz</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="font-sans">
    <!-- Navbar -->
    <header class="border-b px-6 py-4 flex items-center justify-between">
      <div class="text-2xl font-bold text-yellow-500">FWZ</div>

      <!-- Tombol Hamburger untuk mobile -->
      <button id="menu-toggle" class="md:hidden text-gray-700 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <!-- Navigasi -->
      <nav
        id="nav-menu" class="hidden md:flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto px-6 py-4 md:p-0 shadow md:shadow-none z-50"
      >
        <button
          class="px-4 py-1 rounded text-left md:text-center"
          onclick="document.getElementById('home').scrollIntoView({ behavior: 'smooth' })"
        >
          Home
        </button>
        <button
          class="px-4 py-1 rounded text-left md:text-center"
          onclick="document.getElementById('profile').scrollIntoView({ behavior: 'smooth' })"
        >
          Our Profile
        </button>
        <button
          class="px-4 py-1 rounded text-left md:text-center"
          onclick="document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })"
        >
          Portfolio
        </button>
        <button
          class="px-4 py-1 rounded text-left md:text-center"
          onclick="document.getElementById('traveling_plans').scrollIntoView({ behavior: 'smooth' })"
        >
          My Traveling Plans
        </button>
        <button
          class="px-4 py-1 rounded text-left md:text-center"
          onclick="document.getElementById('Message').scrollIntoView({ behavior: 'smooth' })"
        >
          Message Us
        </button>
      </nav>
    </header>
    <!-- Hero -->
    <section class="text-center py-12" id="home">
      <h1 class="text-2xl font-bold">Hi, Welcome To Website</h1>
      <p class="text-gray-600 mt-2">
        I'm learning to become a front-end developer. I enjoy building simple
        websites using HTML, CSS, and Tailwind CSS.
      </p>
      <div class="mt-8 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1366&q=80"
          alt=""
          class="w-[1366px] h-[578px] object-cover rounded shadow-lg"
        />
      </div>
    </section>

    <!-- Our Profile -->
    <section class="py-12 border-t px-8" id="profile">
      <h2 class="text-xl font-bold text-center mb-8">Our Profile</h2>
      <div
        class="mt-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8"
      >
        <div class="md:w-1/2">
          <p class="text-center md:text-left max-w-2xl mx-auto text-gray-700">
            Hello, my name is Fawaz. I am a passionate learner and aspiring
            front-end developer. I love creating user-friendly websites and
            exploring new technologies. My goal is to build responsive and
            interactive websites that provide great user experiences.
          </p>
        </div>
        <div class="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1366&q=80"
            alt="Profile"
            class="w-[680px] h-[289px] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section class="py-12 border-t px-8" id="portfolio">
      <h2 class="text-xl font-bold text-center mb-8">Portfolio</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="border rounded shadow-md overflow-hidden">
          <img
            src="img/photo-1545665277-5937489579f2.avif"
            alt="Project 1"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg">Website Project 1</h3>
            <p class="text-gray-600 text-sm">
              A simple responsive website built using HTML and Tailwind CSS.
            </p>
          </div>
        </div>
        <div class="border rounded shadow-md overflow-hidden">
          <img
            src="img/ui.avif"
            alt="Project 2"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg">UI Design</h3>
            <p class="text-gray-600 text-sm">
              A clean user interface concept design using Figma and CSS utility.
            </p>
          </div>
        </div>
        <div class="border rounded shadow-md overflow-hidden">
          <img
            src="img/front and.avif"
            alt="Project 3"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg">Front-End Practice</h3>
            <p class="text-gray-600 text-sm">
              Interactive elements and animations practice with JavaScript and
              Tailwind.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- my traveling plans -->
    <section class="py-12 border-t" id="traveling_plans">
      <h2 class="text-xl font-bold text-center mb-8">My Traveling Plans</h2>
      <p class="text-M font-times text-center mb-8">
        If I had more sustenance I would visit this place:
      </p>

      <!-- Tombol scroll -->
      <div class="flex justify-center gap-4 mb-4">
        <button
          onclick="scrollHeadquarter('left')"
          class="bg-gray-200 px-3 py-1 rounded"
        >
          &larr;
        </button>
        <button
          onclick="scrollHeadquarter('right')"
          class="bg-gray-200 px-3 py-1 rounded"
        >
          &rarr;
        </button>
      </div>

      <div id="hqScroll" class="flex gap-12 overflow-x-auto px-4 scroll-smooth">
        <!-- Jakarta -->
        <div class="text-center cursor-pointer" onclick="showImage('Jakarta')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/photo-1555899434-94d1368aa7af.avif"
              alt="Jakarta"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Jakarta</p>
        </div>

        <!-- Bandung -->
        <div class="text-center cursor-pointer" onclick="showImage('Bandung')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/photo-1611638281871-1063d3e76e1f.avif"
              alt="Bandung"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Bandung</p>
        </div>

        <!-- Surabaya -->
        <div class="text-center cursor-pointer" onclick="showImage('Surabaya')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/surabaya.avif"
              alt="Surabaya"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Surabaya</p>
        </div>

        <!-- Rinjani -->
        <div class="text-center cursor-pointer" onclick="showImage('Rinjani')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/Rinjani.avif"
              alt="Rinjani"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Rinjani</p>
        </div>

        <!-- Medan -->
        <div class="text-center cursor-pointer" onclick="showImage('Medan')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/medan.avif"
              alt="Medan"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Medan</p>
        </div>

        <!-- Tokyo -->
        <div class="text-center cursor-pointer" onclick="showImage('Tokyo')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/Tokyoavif.avif"
              alt="Tokyo"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Tokyo</p>
        </div>

        <!-- Jayapura -->
        <div class="text-center cursor-pointer" onclick="showImage('Jayapura')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/jayapura.avif"
              alt="Jayapura"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Jayapura</p>
        </div>

        <!-- London -->
        <div class="text-center cursor-pointer" onclick="showImage('London')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/london.avif"
              alt="London"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">London</p>
        </div>

        <!-- Berlin -->
        <div class="text-center cursor-pointer" onclick="showImage('Berlin')">
          <div class="w-24 h-24 border rounded-full mx-auto overflow-hidden">
            <img
              src="img/berlin.avif"
              alt="Berlin"
              class="w-full h-full object-cover"
            />
          </div>
          <p class="mt-2">Berlin</p>
        </div>
      </div>

      <div id="hqImage" class="mt-8 flex justify-center"></div>
    </section>

    <!-- Message Us -->
    <section class="py-12 border-t px-8" id="Message">
      <h2 class="text-xl font-bold mb-8">Message Us</h2>
      <div class="flex flex-col md:flex-row gap-8">
        <form class="flex-1 space-y-4" onsubmit="handleSubmit(event)">
          <div>
            <label class="block">Nama</label>
            <input
              type="text"
              id="nama"
              class="w-full border px-2 py-1"
              required
            />
          </div>
          <div>
            <label class="block">Tanggal Lahir :</label>
            <input
              type="date"
              id="tanggal"
              class="w-full border px-2 py-1"
              required
            />
          </div>
          <div>
            <label class="block">Jenis Kelamin :</label>
            <label class="inline-flex items-center mr-4">
              <input
                type="radio"
                name="gender"
                value="Laki-Laki"
                required
                class="mr-1"
              />
              Laki-Laki
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Perempuan"
                required
                class="mr-1"
              />
              Perempuan
            </label>
          </div>
          <div>
            <label class="block">Pesan :</label>
            <textarea
              id="pesan"
              class="w-full border px-2 py-1"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" class="bg-gray-300 px-4 py-2">Submit</button>
        </form>

        <div class="flex-1 border p-4">
          <p><strong>Current time :</strong> <span id="time"></span></p>
          <p class="mt-4">
            <strong>Nama :</strong> <span id="outNama">-</span>
          </p>
          <p><strong>Tanggal Lahir :</strong> <span id="outTanggal">-</span></p>
          <p><strong>Jenis Kelamin :</strong> <span id="outGender">-</span></p>
          <p><strong>Pesan :</strong> <span id="outPesan">-</span></p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center py-4 border-t">
      Created By Fawaz dwi saputra
    </footer>

    <!-- Script -->
    <script src=""></script>
  </body>
</html>
