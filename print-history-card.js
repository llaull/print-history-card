class PrintHistoryCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    setConfig(config) {
        this.config = config;

        this.shadowRoot.innerHTML = `
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: x-small;
                font-family: Arial, sans-serif;
                color: #DBD7DB;
                background-color: #111111;
            }
            
            tr { 
                line-height: 10px; 
            }

            th, td {
                padding: 4px;
                text-align: left;
                border-bottom: 1px solid #343434;
                font-size: 10px;
            }

            th {
                font-weight: bold;
            }

            tr:nth-child(even) {
                background-color: #1C1C1C;
            }

            tr:hover {
                background-color: #111111;
            }

            .loading, .error {
                text-align: center;
                font-style: italic;
                color: #B22222;
            }

            /* Style pour afficher un carré de couleur */
            .color-box {
                width: 20px;
                height: 20px;
                display: inline-block;
                margin-right: 8px;
                border-radius: 3px;
                border: 2px solid #1C1C1C;
            }
        </style>

        <table>
            <thead>
                <tr>
                    <th>File Name</th>
                    <th>Color</th>
                    <th>Type</th>
                    <th>Success</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody id="print-history-body">
                <tr><td colspan="6" class="loading">Loading...</td></tr>
            </tbody>
        </table>
        `;

        console.info("%c🐼 Print History - v0.1", "color:rgb(55, 218, 37); font-weight: 700;");
        console.info("%c PRINT-HISTORY CARD %c plup ", "color: white; background: coral; font-weight: 700;", "color: coral; background: white; font-weight: 700;");

        this.content = this.shadowRoot.querySelector("#print-history-body");
        this.fetchData();
    }

    async fetchData() {
        const timestamp = Date.now();

        try {
            const response = await fetch(`/local/print_history.json?cache_buster=${timestamp}`);
            if (!response.ok) throw new Error("Failed to load JSON");
            const data = await response.json();

            this.updateTable(data);
        } catch (error) {
            console.error("Error fetching print history:", error);
            this.content.innerHTML = `<tr><td colspan="6" class="error">Error loading data</td></tr>`;
        }
    }

    updateTable(history) {
        if (!history.length) {
            this.content.innerHTML = `<tr><td colspan="6" class="error">No data available</td></tr>`;
            return;
        }

        this.content.innerHTML = history.map(entry => `
            <tr>
                <td>${entry.file_name}</td>
                <td><span class="color-box" style="background-color:${entry.colors}"></span></td>
                <td>${entry.ams_type}</td>
                <td>
                    ${entry.finished_at === null
                        ? `<ha-icon icon="mdi:printer-3d-nozzle" style="color: orange; font-size: 24px;"></ha-icon>`
                        : entry.print_finished === 1
                            ? `<ha-icon icon="mdi:check-bold" style="color: green; font-size: 24px;"></ha-icon>`
                            : `<ha-icon icon="mdi:close-thick" style="color: #B22222; font-size: 24px;"></ha-icon>`
                    }
                </td>
                <td>
                    ${entry.print_duration !== null
                        ? entry.print_duration
                        : `<ha-icon icon="mdi:clock-outline" style="color: orange; font-size: 24px;"></ha-icon>`
                    }
                </td>
            </tr>
        `).join("");
    }

    formatDateFr(dateStr) {
        let date = new Date(dateStr);
        return date.toLocaleString('fr-FR', {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    static getConfigElement() {
        return document.createElement("hui-generic-card-editor");
    }

    static getStubConfig() {
        return {};
    }
}

// Définition du composant dans Home Assistant
customElements.define("print-history-card", PrintHistoryCard);
