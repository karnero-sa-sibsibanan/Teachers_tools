// products.js
const productsDatabase = {
    "e-ECD Checklist": {
        name: "e-ECCD Checklist",
        category: "productivity",
        version: "v2.1",
        rating: "★★★★★ (review feature is not yet implemented)",
        price: "₱485.00",
        shortDescription: "Streamline early childhood development tracking with a 100% offline desktop application built for Filipino educators.",
        description: `
            <div class="space-y-4">
                <p class="text-gray-300 font-medium">Streamline early childhood development tracking with the powerful, <strong>100% offline</strong> desktop application built specifically for Filipino educators.</p>
                <p class="text-gray-400">Say goodbye to manual calculations and endless paperwork. This tool simplifies your entire workflow, letting you focus on what matters most—your students.</p>
                <div class="mt-6 space-y-2">
                    <h4 class="text-xs uppercase font-bold tracking-wider text-blue-400">Free Version Features</h4>
                    <ul class="list-disc list-inside text-gray-400 space-y-1 pl-1">
                        <li><strong>Effortless Auto-Computation:</strong> Input raw data and see scores calculated instantly with 100% accuracy.</li>
                        <li><strong>Smart Date-Result Simulation:</strong> Track progress over time, run simulations, and create reliable reference points.</li>
                        <li><strong>Seamless Format Switching:</strong> Toggle interface views directly between DepEd and ECCD Council formats.</li>
                        <li><strong>100% Offline & Private:</strong> No internet required. All student data stays safely on your local device.</li>
                    </ul>
                </div>
                <div class="mt-6 space-y-2 border-t border-gray-900 pt-4">
                    <h4 class="text-xs uppercase font-bold tracking-wider text-yellow-500">Premium Version Features (Requires Upgrade)</h4>
                    <p class="text-xs text-gray-500 italic">The free version computes and simulates records. Unlock Premium to export and compile official documents:</p>
                    <ul class="list-disc list-inside text-gray-400 space-y-1 pl-1">
                        <li><strong>Complete Document Generation:</strong> Export professional reports to DOCX files (with or without templates).</li>
                        <li><strong>Official Visual Graphs:</strong> Render stunning, easy-to-read charts matching DepEd and ECCD Council layouts.</li>
                        <li><strong>Class-Wide Consolidation:</strong> Compile comprehensive summaries for your entire section instantly with zero manual tallying.</li>
                        <li><strong>Fully Modifiable Templates:</strong> Easily customize document templates to adapt to local school division guidelines.</li>
                        <li><strong>Batch PDF & Booklet Conversion:</strong> Convert multiple DOCX files to PDF simultaneously using normal or paper-saving booklet layouts.</li>
                    </ul>
                </div>
                <div class="mt-6 p-3 bg-gray-900/40 border border-gray-900 rounded-xl text-[11px] text-gray-500 leading-relaxed">
                    <strong>⚠️ Important Disclaimer:</strong> This is an independent, unofficial application. It is not developed, endorsed, or officially distributed by the Department of Education (DepEd) or the ECCD Council.
                </div>
            </div>
        `,
        minOS: "Windows 10",
        minRAM: "4 GB Memory Baseline",
        storage: "850 MB available space",
        mode: "100% Offline Engine",
        youtubeId: "dQw4w9WgXcQ", 
        secureIconUrl: "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWJlWW1Jc0tnVjJzV0ZoeGFzTkFIMlNUNUNITWxZdDQ2",
        secureScreenshots: [
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMUxVdXEwNTY1bENzaEJmMUlpSFQyX2twZC1nZGhIaVhv",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMVFtZzhzajZBRTQ3UVRCSENqa1RLRHFLOElEaXVaZVFF",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMXB5d01xZ2sxUDFmRzgtdmpkMjdYcnRuZWgteXhZWllo",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWJFeDhlUVdvMnMyY1RGdm9USFlWbk1ydWFJUnZjWnVL",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWozOUFwOEgwemhtcF91VEN2YnRTWXJzcTViUzZGZExj",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMUpUREZQQkJ3M1g1TFVFeUV1U2lic1lPWFJTcGh4VDA1",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWRRYUMtbFdnaDFZVnp1aFdvSUtDNnNxY2YyV1AtZU9R",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMTVGZEJOeFlZYlVnMjRvS2c3TVM5ODRPYUNpbElxU01I",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMVhxNEVZWjhURUJSX3NPdmNVVGVSemE3X21Zb3Z6SXhV",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMUJWeW1NZVZWNjJMUXZiWHNTMjItMzdQSm9Ib3htc01l",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMXVQdXdwMnFCSjdJU05sU3JYOG1CUl9GNHZ1aVFhbGFB",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWtUOFh3YTJFTFFrWW55YmJQa1ZleFdwaWJUVGEyTlV2",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMTR3UjhEdlA2c2Vja185NDRCclFub3MzOE1BckxhUmdh",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMXQ3MHpzYWwzMDhmS21yYmZxX3FLeG1yUVBpUzlPVnkx",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWFfU0Mya0g3YWttNVdlN0xzTkxaaHJpNUNZa0pDbjV3",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMTJ5ZmNJenM4WGNrSldnY1hqR2FKUWJESU13cXNKSmho",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMVlMSjFqd3FsU3NqV3lfMmMxSzVLemNFRGIxMWl1X1kw",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMWUza1hpODRFMUp5d25HeTB3WDAyZmI2cWk3MjZrNExw",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMXdCLWFqQS1XemhsNURmaWhFREtDU2hBUEF4V2p5ZmR3",
            "aHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2QvMU9fUExhdDcxeldyZnUwYmxlMHlFQ3pGMF85WVNHbWli"
        ],
        secureBuyUrl: "YUhSMGNITTZMeTluYjI5bmFXVXVaMnhsTDJGemQzSmxZMmhoYm5SdmNuUnZjbVV1YUhSMGNEb3ZMMnhwYm10bFpIUnZjbVV1YUhSMGNEb3ZMdw==",
        secureDemoId: "bXktZ29vZ2xlLWRyaWZlLWZpbGUtaWQtcGxhY2Vob2xkZXI=", 
        secureFbUrl: "YUhSMGNITTZMeTkzZDNjdVptRmphMkZ2YjIzdUkyTnZiUzkxY21zdmFHRjNaVzU2YVdVeU1UWTBOalV1YUhSMGNEb3ZMMnhwYm10bFpIUnZjbVV1YUhSMGNEb3ZMdw=="
    }
    //add a comma before adding another product
    
};
