
import React from 'react';
import { MenuItem, PricingPlan, Review } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  { id: 'b1', name: 'Idli Sambar', category: 'breakfast', price: '₹40', description: 'Soft steamed idlis served with piping hot sambar and coconut chutney', icon: '🥘', tag: 'Popular', isVeg: true },
  { id: 'b2', name: 'Masala Dosa', category: 'breakfast', price: '₹50', description: 'Crispy golden dosa with spiced potato filling, served with chutney & sambar', icon: '🫓', tag: 'Best Seller', isVeg: true },
  { id: 'b3', name: 'Upma & Kesari Bath', category: 'breakfast', price: '₹35', description: 'Traditional rava upma paired with sweet kesari bath — a classic combo', icon: '🍳', isVeg: true },
  { id: 'b4', name: 'Filter Coffee', category: 'breakfast', price: '₹20', description: 'Authentic South Indian filter coffee with fresh milk and decoction', icon: '☕', tag: 'Must Try', isVeg: true },
  
  // Lunch
  { id: 'l1', name: 'Full Meals (Thali)', category: 'lunch', price: '₹80', description: 'Rice, sambar, rasam, 2 vegetable curries, curd, papad, pickle & payasam', icon: '🍛', tag: 'Signature', isVeg: true },
  { id: 'l2', name: 'Bisi Bele Bath', category: 'lunch', price: '₹60', description: "Karnataka's beloved spiced rice-lentil dish with fresh vegetables", icon: '🍚', tag: 'Popular', isVeg: true },
  { id: 'l3', name: 'Chapati Meals', category: 'lunch', price: '₹70', description: '4 soft chapatis with dal fry, mixed vegetable curry and salad', icon: '🥘', isVeg: true },
  
  // Dinner
  { id: 'd1', name: 'Roti Meals', category: 'dinner', price: '₹75', description: 'Fresh rotis with paneer curry, dal and rice — a complete dinner', icon: '🫓', tag: 'Popular', isVeg: true },
  { id: 'd2', name: 'Mini Meals', category: 'dinner', price: '₹55', description: 'Rice, sambar, rasam, one curry and curd — perfect light dinner', icon: '🍛', isVeg: true },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    icon: '🌅',
    price: '2,000',
    description: 'Lunch or Dinner only',
    features: ['1 Meal per Day', 'Lunch OR Dinner', 'Rice + 2 Curries + Dal', 'Monday to Saturday'],
    excluded: ['Breakfast', 'Sunday Specials', 'Home Delivery']
  },
  {
    id: 'standard',
    name: 'Standard',
    icon: '☀️',
    price: '3,500',
    description: 'Lunch + Dinner',
    features: ['2 Meals per Day', 'Lunch + Dinner', 'Full Thali with Extras', 'Monday to Sunday', 'Sunday Specials'],
    excluded: ['Breakfast', 'Home Delivery'],
    isFeatured: true
  },
  {
    id: 'premium',
    name: 'Premium',
    icon: '👑',
    price: '5,000',
    description: 'All 3 Meals + Delivery',
    features: ['3 Meals per Day', 'Breakfast + Lunch + Dinner', 'Full Thali + Sweets', 'All 7 Days', 'Priority Seating', 'Home Delivery'],
    excluded: []
  }
];

export const REVIEWS: Review[] = [
  { id: 'r1', author: 'Rajesh Kumar', role: 'Regular Customer', text: "Best mess in Shimoga! The food tastes exactly like homemade. I've been eating here for 2 years and never been disappointed.", stars: 5, avatar: 'R' },
  { id: 'r2', author: 'Priya Sharma', role: 'Student', text: "As a student, finding affordable and tasty food was hard until I found G R Mess. The monthly plan saves me so much money!", stars: 5, avatar: 'P' },
  { id: 'r3', author: 'Arun Hegde', role: 'Food Enthusiast', text: "The sambar and rasam here are absolutely divine. Reminds me of my grandmother's cooking. Clean place and friendly staff.", stars: 5, avatar: 'A' }
];
