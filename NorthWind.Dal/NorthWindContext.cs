using Microsoft.EntityFrameworkCore;
using NorthWind.Entities;
using System;

namespace NorthWind.Dal
{
    public class NorthWindContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=DESKTOP-5G2SEH5;Database=NorthWind;Trusted_Connection=True;");

        }
    }
}
