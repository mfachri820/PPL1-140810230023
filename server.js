const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory database
let items = [];

// [CREATE] POST /api/v1/items
app.post('/api/v1/items', (req, res) => {
    const { name, quantity, price } = req.body;
    const newItem = {
        id: `item-${Date.now()}`,
        name,
        quantity: quantity || 0,
        price: price || 0
    };
    items.push(newItem);
    
    res.status(201).json({
        status: "success",
        message: "Barang berhasil ditambahkan",
        data: newItem
    });
});

// [READ] GET /api/v1/items
app.get('/api/v1/items', (req, res) => {
    res.status(200).json({
        status: "success",
        data: items
    });
});

// [READ] GET /api/v1/items/:id
app.get('/api/v1/items/:id', (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) {
        return res.status(404).json({ status: "error", message: "Barang tidak ditemukan", code: 404 });
    }
    res.status(200).json({ status: "success", data: item });
});

// [UPDATE] PUT /api/v1/items/:id
app.put('/api/v1/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ status: "error", message: "Barang tidak ditemukan", code: 404 });
    }
    
    const { name, quantity, price } = req.body;
    items[index] = { ...items[index], name, quantity, price };
    
    res.status(200).json({
        status: "success",
        message: "Barang berhasil diperbarui",
        data: items[index]
    });
});

// [DELETE] DELETE /api/v1/items/:id
app.delete('/api/v1/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index === -1) {
        return res.status(404).json({ status: "error", message: "Barang tidak ditemukan", code: 404 });
    }
    
    items.splice(index, 1);
    res.status(200).json({
        status: "success",
        message: "Barang berhasil dihapus"
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});