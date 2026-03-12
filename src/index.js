'use strict';
const fs = require('fs');
const path = require('path');

const mockData = {
  products: [
    {
      title: "Royal Velvet Sofa",
      category: "Sofas",
      price: 89999,
      old_price: 110000,
      imageFile: "sofa-1.jpg",
      imagesFiles: ["sofa-1.jpg", "sofa-2.jpg"],
      description: "Experience unmatched luxury with our Royal Velvet Sofa. Crafted with premium velvet upholstery and solid wood frame, this sofa brings elegance to any living space.",
      features: ["Premium Velvet Fabric", "Solid Wood Frame", "High-Density Foam", "5 Year Warranty"],
      badge: "bestseller",
      featured: true
    },
    {
      title: "Modern L-Shape Sectional",
      category: "Sofas",
      price: 125000,
      old_price: 150000,
      imageFile: "sofa-2.jpg",
      imagesFiles: ["sofa-2.jpg", "sofa-1.jpg"],
      description: "The perfect blend of style and comfort. Our L-Shape Sectional provides generous seating for the whole family with contemporary design.",
      features: ["Modular Design", "Stain-Resistant Fabric", "Reversible Cushions", "10 Year Warranty"],
      badge: "new",
      featured: true
    },
    {
      title: "Elegance King Bed",
      category: "Beds",
      price: 75000,
      old_price: 95000,
      imageFile: "bed-1.jpg",
      imagesFiles: ["bed-1.jpg", "bed-2.jpg"],
      description: "Transform your bedroom into a luxury retreat with the Elegance King Bed. Features a plush upholstered headboard and sturdy construction.",
      features: ["King Size", "Upholstered Headboard", "Under-bed Storage", "Engineered Wood"],
      badge: "popular",
      featured: true
    },
    {
      title: "Heritage Platform Bed",
      category: "Beds",
      price: 95000,
      imageFile: "bed-2.jpg",
      imagesFiles: ["bed-2.jpg", "bed-1.jpg"],
      description: "A statement piece that combines classic tufted design with modern platform styling. The Heritage bed is built to last generations.",
      features: ["Tufted Leather Headboard", "Platform Design", "No Box Spring Needed", "Premium Finish"],
      featured: false
    },
    {
      title: "Grand Dining Table Set",
      category: "Dining",
      price: 65000,
      old_price: 80000,
      imageFile: "dining-1.jpg",
      imagesFiles: ["dining-1.jpg", "dining-2.jpg"],
      description: "Gather around the Grand Dining Table Set for memorable meals. Solid wood construction with seating for six in timeless elegance.",
      features: ["Seats 6", "Solid Sheesham Wood", "Natural Finish", "Matching Chairs Included"],
      badge: "popular",
      featured: true
    },
    {
      title: "Marble Top Round Dining",
      category: "Dining",
      price: 110000,
      imageFile: "dining-2.jpg",
      imagesFiles: ["dining-2.jpg", "dining-1.jpg"],
      description: "A showstopper for modern dining rooms. Italian marble top paired with a sculptural gold-tone base creates a stunning centerpiece.",
      features: ["Italian Marble Top", "Gold-Tone Base", "Seats 4-6", "Designer Chairs"],
      badge: "new",
      featured: false
    },
    {
      title: "Walk-in Wardrobe System",
      category: "Wardrobes",
      price: 135000,
      old_price: 165000,
      imageFile: "wardrobe-1.jpg",
      imagesFiles: ["wardrobe-1.jpg"],
      description: "Organize your wardrobe like a luxury boutique. Our walk-in system features adjustable shelving, hanging rods, and soft-close drawers.",
      features: ["Modular System", "Soft-Close Drawers", "LED Lighting", "Adjustable Shelving"],
      badge: "popular",
      featured: false
    },
    {
      title: "Executive Office Suite",
      category: "Office",
      price: 85000,
      imageFile: "office-1.jpg",
      imagesFiles: ["office-1.jpg"],
      description: "Command your workspace with the Executive Office Suite. Featuring a sleek glass-top desk with ergonomic chair for maximum productivity.",
      features: ["Glass Top Desk", "Ergonomic Chair", "Cable Management", "Built-in Shelving"],
      featured: false
    }
  ],
  categories: ["Sofas", "Beds", "Dining", "Wardrobes", "Office"],
  homepage: {
    heroImageFile: "showroom.jpg",
    whyChoose: [
      { icon: "award", title: "Premium Quality", desc: "Handcrafted with the finest materials for lasting elegance" },
      { icon: "truck", title: "Free Delivery", desc: "Complimentary delivery and assembly across the region" },
      { icon: "shield", title: "10 Year Warranty", desc: "Industry-leading warranty on all premium collections" },
      { icon: "star", title: "Custom Designs", desc: "Bespoke furniture tailored to your exact specifications" }
    ],
    testimonials: [
      { name: "Rajesh Kumar", text: "Absolutely stunning furniture! The quality exceeded my expectations. Our living room looks like a luxury hotel now.", rating: 5 },
      { name: "Priya Sharma", text: "Dreams Furniture transformed our home. The craftsmanship and attention to detail is remarkable. Highly recommended!", rating: 5 },
      { name: "Amit Singh", text: "Best furniture store in Muzaffarpur. Great designs, premium quality, and excellent customer service.", rating: 5 }
    ]
  },
  about: {
    heroTitle: "About Dreams Furniture",
    heroSubtitle: "Where luxury meets comfort, and every piece tells a story of craftsmanship and elegance.",
    heroImageFile: "showroom.jpg",
    storyTitle: "A Legacy of Craftsmanship",
    storyText: "Founded with a passion for creating exceptional furniture, Dreams Furniture has been Muzaffarpur's premier destination for luxury home furnishings. What started as a small workshop has grown into a sprawling showroom featuring over 500 unique designs.\n\nWe believe that furniture is more than just functional — it's an expression of your personality and taste. That's why every piece in our collection is carefully curated or custom-designed to bring beauty and comfort into your home.",
    storyImageFile: "hero-bg.jpg",
    stats: [
      { value: "15+", label: "Years of Excellence" },
      { value: "10K+", label: "Happy Customers" },
      { value: "500+", label: "Unique Designs" },
      { value: "100%", label: "Quality Assured" }
    ],
    values: [
      { icon: "heart", title: "Passion for Craft", desc: "Every piece is crafted with love and meticulous attention to detail." },
      { icon: "eye", title: "Eye for Design", desc: "Contemporary aesthetics blended with timeless elegance." },
      { icon: "award", title: "Quality First", desc: "Only the finest materials make it into our collections." },
      { icon: "users", title: "Customer Focus", desc: "Your satisfaction drives every decision we make." }
    ]
  },
  contact: {
    title: "Contact Us",
    subtitle: "Get In Touch",
    contactInfo: [
      { icon: "map-pin", title: "Visit Our Store", detail: "Dreams Furniture, Muzaffarpur, Bihar, India" },
      { icon: "phone", title: "Call Us", detail: "+91 9801980316" },
      { icon: "mail", title: "Email Us", detail: "muzaffarpurdreams@gmail.com" },
      { icon: "clock", title: "Store Hours", detail: "Mon - Sat: 10 AM - 8 PM" }
    ]
  },
  galleries: [
    "hero-bg.jpg", "sofa-1.jpg", "dining-2.jpg", "bed-1.jpg", "showroom.jpg", "sofa-2.jpg", "wardrobe-1.jpg", "dining-1.jpg", "office-1.jpg", "bed-2.jpg"
  ]
};

async function uploadFile(strapi, filePath, fileName) {
  const fullPath = path.resolve(__dirname, '../../website-frontend/src/assets', filePath.includes('-') && !filePath.includes('hero') && !filePath.includes('showroom') ? `products/${filePath}` : filePath);
  
  if (!fs.existsSync(fullPath)) return null;

  const stat = fs.statSync(fullPath);
  const type = fileName.endsWith('png') ? 'image/png' : 'image/jpeg';

  const file = {
    filepath: fullPath,
    originalFilename: fileName,
    mimetype: type,
    size: stat.size,
  };

  try {
    const uploadedFiles = await strapi.plugin('upload').service('upload').upload({
      data: { fileInfo: { name: fileName, alternativeText: fileName } },
      files: file,
    });
    return uploadedFiles[0];
  } catch (error) {
    console.error(`Failed to upload ${fileName}:`, error);
    return null;
  }
}

function textToBlocks(text) {
  return [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: text
        }
      ]
    }
  ];
}

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    const ensurePublicPermissions = async () => {
      console.log('Ensuring public permissions...');

      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (!publicRole) {
        return;
      }

      const apis = ['product', 'category', 'homepage', 'about-page', 'contact-page', 'gallery'];

      for (const api of apis) {
        for (const action of [`api::${api}.${api}.find`, `api::${api}.${api}.findOne`]) {
          const existingPermission = await strapi.db
            .query('plugin::users-permissions.permission')
            .findOne({
              where: {
                role: publicRole.id,
                action,
              },
            });

          if (!existingPermission) {
            await strapi.db.query('plugin::users-permissions.permission').create({
              data: {
                action,
                role: publicRole.id,
              },
            });
          }
        }
      }
    };

    const isProduction = process.env.NODE_ENV === 'production';
    const shouldSeed = strapi.config.get('server.ENABLE_SEED_DATA', !isProduction);

    if (!shouldSeed) {
      await ensurePublicPermissions();
      console.log('Seed bootstrap disabled. Skipping...');
      return;
    }

    // Check if we already seeded to avoid duplicates
    const productCount = await strapi.documents('api::product.product').count();
    if (productCount > 0) {
      console.log('Database already seeded. Skipping...');
      return;
    }

    console.log('Seeding database with mock data...');

    // 1. Upload all necessary images
    const imagesToUpload = [
      "sofa-1.jpg", "sofa-2.jpg", "bed-1.jpg", "bed-2.jpg", "dining-1.jpg", "dining-2.jpg",
      "wardrobe-1.jpg", "office-1.jpg", "hero-bg.jpg", "showroom.jpg"
    ];
    const uploadedImages = {};
    for (const img of imagesToUpload) {
      const file = await uploadFile(strapi, img, img);
      if (file) uploadedImages[img] = file;
    }

    // 2. Create Categories
    const categoryMap = {};
    for (const cat of mockData.categories) {
      let slug = cat.toLowerCase();
      const createdCat = await strapi.documents('api::category.category').create({
        data: { Name: cat, slug, publishedAt: new Date() }
      });
      categoryMap[cat] = createdCat;
    }

    // 3. Create Products
    for (const prod of mockData.products) {
      const imagesIds = prod.imagesFiles.map(img => uploadedImages[img]?.id).filter(Boolean);
      await strapi.documents('api::product.product').create({
        data: {
          title: prod.title,
          category: categoryMap[prod.category].documentId,
          price: prod.price,
          old_price: prod.old_price,
          images: imagesIds,
          description: textToBlocks(prod.description),
          features: prod.features,
          badge: prod.badge,
          featured: prod.featured,
          publishedAt: new Date()
        }
      });
    }

    // 4. Create Homepage
    await strapi.documents('api::homepage.homepage').create({
      data: {
        heroImage: uploadedImages[mockData.homepage.heroImageFile]?.id,
        whyChoose: mockData.homepage.whyChoose,
        testimonials: mockData.homepage.testimonials,
        publishedAt: new Date()
      }
    });

    // 5. Create About Page
    await strapi.documents('api::about-page.about-page').create({
      data: {
        heroTitle: mockData.about.heroTitle,
        heroSubtitle: mockData.about.heroSubtitle,
        heroImage: uploadedImages[mockData.about.heroImageFile]?.id,
        storyTitle: mockData.about.storyTitle,
        storyText: mockData.about.storyText,
        storyImage: uploadedImages[mockData.about.storyImageFile]?.id,
        stats: mockData.about.stats,
        values: mockData.about.values,
        publishedAt: new Date()
      }
    });

    // 6. Create Contact Page
    await strapi.documents('api::contact-page.contact-page').create({
      data: {
        title: mockData.contact.title,
        subtitle: mockData.contact.subtitle,
        contactInfo: mockData.contact.contactInfo,
        publishedAt: new Date()
      }
    });

    // 7. Create Galleries
    for (const img of mockData.galleries) {
      if (uploadedImages[img]) {
        await strapi.documents('api::gallery.gallery').create({
          data: {
            Media: uploadedImages[img].id,
            publishedAt: new Date()
          }
        });
      }
    }

    await ensurePublicPermissions();

    console.log('Seeding complete!');
  },
};
