// ================================
// Horse Racing Manager
// Login System
// ================================

const users = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    }
];

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password.");
        return;
    }

    const user = users.find(
        account =>
            account.username === username &&
            account.password === password
    );

    if (!user) {
        alert("Incorrect username or password.");
        return;
    }

    alert(
        "Login successful!\n" +
        "Welcome " +
        user.username
    );

    if (user.role === "admin") {
        showAdminDashboard();
    }
}


// ================================
// ADMIN DASHBOARD
// ================================

function showAdminDashboard() {

    document.body.innerHTML = `

        <div class="dashboard">

            <header class="dashboard-header">

                <h1>
                    🏇 Horse Racing Manager
                </h1>

                <button onclick="logout()">
                    Logout
                </button>

            </header>


            <aside class="sidebar">

                <button onclick="showAdminDashboard()">
                    🏠 Dashboard
                </button>

                <button onclick="showRaces()">
                    🏇 Races
                </button>

                <button onclick="showHorses()">
                    🐎 Horses
                </button>

            </aside>


            <main class="dashboard-content">

                <h2>
                    Admin Dashboard
                </h2>

                <p>
                    Welcome, Admin!
                </p>


                <div class="stats">

                    <div class="stat-card">

                        <h3>
                            🏇 Races
                        </h3>

                        <p>
                            0
                        </p>

                    </div>


                    <div class="stat-card">

                        <h3>
                            🐎 Horses
                        </h3>

                        <p>
                            0
                        </p>

                    </div>


                    <div class="stat-card">

                        <h3>
                            👥 Users
                        </h3>

                        <p>
                            1
                        </p>

                    </div>

                </div>

            </main>

        </div>
    `;
}


// ================================
// RACES
// ================================

function renderRaces(){
    setMain(`<h2>Races</h2><div class="card"><p>Race management section.</p></div>`);
}



// ================================
// HORSES
// ================================

function renderHorses(){
    setMain(`<h2>Horses</h2><div class="card"><p>Horse management section.</p></div>`);
}



// ================================
// LOGOUT
// ================================

function logout() {

    location.reload();
}
