const express = require('express');
const app = express();

const transactionRoute = express.Router();
let Transactions = require('../model/Transaction');
const Transaction = require('../model/Transaction');

// Add Transaction
transactionRoute.route('/dashboard').post(async (req, res, next) => {
    try {
        const data = await Transactions.create(req.body);
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// Get all Transactions
transactionRoute.route('/').get(async (req, res, next) => {
    try {
        const data = await Transactions.find();
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// Get Transaction
transactionRoute.route('/read-transaction/:id').get(async (req, res, next) => {
    try {
        const data = await Transactions.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(data);
    } catch (error) {
        return next(error);
    }
});

// Update Transaction
transactionRoute.route('/edit-transaction/:id').put(async (req, res, next) => {
    try {
        const updatedTransaction = await Transactions.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(updatedTransaction);
        console.log('Transaction updated successfully!');
    } catch (error) {
        return next(error);
    }
});

// Update Income
transactionRoute.route('/edit-income/:id').put(async (req, res, next) => {
    try {
        const updatedTransaction = await Transactions.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(updatedTransaction);
        console.log('Transaction updated successfully!');
    } catch (error) {
        return next(error);
    }
});

// Update Expense
transactionRoute.route('/edit-expense/:id').put(async (req, res, next) => {
    try {
        const updatedTransaction = await Transactions.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        if (!updatedTransaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.json(updatedTransaction);
        console.log('Transaction updated successfully!');
    } catch (error) {
        return next(error);
    }
});

// Delete Transaction
transactionRoute.route('/delete-transaction/:id').delete(async (req, res, next) => {
    try {
        const data = await Transactions.deleteOne({ _id: req.params.id });
        if (data.deletedCount === 0) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.status(200).json({ message: "Transaction deleted successfully!" });
    } catch (error) {
        return next(error);
    }
});


module.exports = transactionRoute;