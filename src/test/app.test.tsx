import React from 'react';
import { render, screen, within, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach } from 'vitest';
import AppRoutes from '../App';
import { INSTITUTIONS } from '../data/institutions';

function renderAtRoute(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

describe('S.E.A. Group of Institutions Website — Acceptance Test Suite', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('1. Renders Homepage in required sequence with H1, ticker, stats, and all 7 primary nav items', () => {
    renderAtRoute('/');

    // Primary navigation items in exact order
    const mainNav = screen.getByRole('navigation', { name: 'Main Navigation' });
    const navLinks = within(mainNav).getAllByRole('link');
    expect(navLinks.map((l) => l.textContent)).toEqual([
      'Academics',
      'Institutions',
      'Admissions',
      'Campus Life',
      'Placements',
      'About',
      'News & Events',
    ]);

    // Prominent Homepage H1
    const h1 = screen.getByRole('heading', {
      level: 1,
      name: /S\.E\.A\. College of Engineering & Technology/i,
    });
    expect(h1).toBeInTheDocument();

    // Secondary line
    expect(screen.getByText(/Part of S\.E\.A\. Group of Institutions/i)).toBeInTheDocument();

    // Admissions Ticker
    expect(screen.getAllByText(/Admissions Open 2026–2027/i).length).toBeGreaterThan(0);

    // Statistics
    expect(screen.getByText('2000')).toBeInTheDocument();
    expect(screen.getByText('S.E.A. Trust Established')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('15,000+')).toBeInTheDocument();
  });

  it('2. Mega Menu interaction: opens Academics & Institutions mega menus, lists all 12 institutions, and closes on Escape', () => {
    renderAtRoute('/');

    const academicsToggle = screen.getByRole('button', { name: 'Academics menu' });
    fireEvent.click(academicsToggle);

    const academicsMenu = screen.getByRole('region', { name: 'Academics submenu' });
    expect(academicsMenu).toBeInTheDocument();
    expect(within(academicsMenu).getByText('MBA (VTU)')).toBeInTheDocument();
    expect(within(academicsMenu).getByText('MBA (BU)')).toBeInTheDocument();
    expect(within(academicsMenu).getByText('MTTM')).toBeInTheDocument();
    expect(within(academicsMenu).getByText('B.Sc Clinical Nutrition')).toBeInTheDocument();
    expect(within(academicsMenu).getByText('Hospital Administration')).toBeInTheDocument();

    // Switch to Institutions Mega Menu and verify all 12 institutions appear
    const institutionsToggle = screen.getByRole('button', { name: 'Institutions menu' });
    fireEvent.click(institutionsToggle);

    const instMenu = screen.getByRole('region', { name: 'Institutions submenu' });
    INSTITUTIONS.forEach((inst) => {
      expect(within(instMenu).getByText(inst.name)).toBeInTheDocument();
    });

    // Escape key closes mega menu
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('region', { name: 'Institutions submenu' })).not.toBeInTheDocument();
  });

  it('3. Mobile navigation drawer opens, toggles nested accordions, and closes on Escape', () => {
    renderAtRoute('/');

    const openDrawerBtn = screen.getByRole('button', { name: /Open navigation menu/i });
    fireEvent.click(openDrawerBtn);

    const dialog = screen.getByRole('dialog', { name: /Mobile Navigation Drawer/i });
    expect(dialog).toBeInTheDocument();

    // Expand Institutions accordion inside mobile drawer
    const instAccordionBtn = within(dialog).getByRole('button', {
      name: /Toggle Institutions submenu/i,
    });
    fireEvent.click(instAccordionBtn);

    INSTITUTIONS.forEach((inst) => {
      expect(within(dialog).getByText(inst.name)).toBeInTheDocument();
    });

    // Escape closes mobile drawer
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(
      screen.queryByRole('dialog', { name: /Mobile Navigation Drawer/i })
    ).not.toBeInTheDocument();
  });

  it('4. Programme Explorer filters by category, searches by query, and handles empty state reset', () => {
    renderAtRoute('/');

    const explorer = screen.getByRole('region', { name: /Explore Diverse Careers/i });
    expect(explorer).toBeInTheDocument();

    // Filter by Engineering
    const engTab = within(explorer).getByRole('tab', { name: 'Engineering' });
    fireEvent.click(engTab);

    expect(
      within(explorer).getByText(
        /Computer Science & Engineering — Internet of Things and Cyber Security including Blockchain Technology/i
      )
    ).toBeInTheDocument();
    expect(within(explorer).getByText(/Agricultural Engineering/i)).toBeInTheDocument();
    expect(within(explorer).getByText(/M\.Tech — VLSI Design and Embedded Systems/i)).toBeInTheDocument();

    // Search for MTTM across All categories
    const allTab = within(explorer).getByRole('tab', { name: 'All' });
    fireEvent.click(allTab);

    const searchInput = within(explorer).getByPlaceholderText(/Search e\.g\. Computer Science/i);
    fireEvent.change(searchInput, { target: { value: 'MTTM' } });

    expect(
      within(explorer).getByRole('link', {
        name: /Master of Tourism & Travel Management \(MTTM\)/i,
      })
    ).toBeInTheDocument();

    // Empty state check
    fireEvent.change(searchInput, { target: { value: 'NonExistentQuantumCourse999' } });
    expect(within(explorer).getByText(/No matching programmes found/i)).toBeInTheDocument();

    const resetBtn = within(explorer).getByRole('button', { name: /Show All Programmes/i });
    fireEvent.click(resetBtn);
    expect(within(explorer).getByText(/Agricultural Engineering/i)).toBeInTheDocument();
  });

  it('5. Admission Enquiry Form dynamically updates programme options by institution, validates fields, and completes demo submission without localStorage', async () => {
    renderAtRoute('/admissions/enquiry');

    const form = screen.getByRole('form', { name: /Demo Enquiry Form/i });
    expect(form).toBeInTheDocument();

    // Verify dynamic institution -> programme dependency
    const instSelect = within(form).getByLabelText(/Select Institution/i) as HTMLSelectElement;
    const progSelect = within(form).getByLabelText(/Select Programme/i) as HTMLSelectElement;

    // Switch to SEA College of Law
    fireEvent.change(instSelect, { target: { value: 'law' } });
    expect(progSelect.value).toBe('law-llb-ba-llb');

    // Switch to SEA College of Nursing
    fireEvent.change(instSelect, { target: { value: 'nursing' } });
    expect(progSelect.value).toBe('nursing-bsc-gnm');

    // Trigger validation errors on empty submission
    const submitBtn = within(form).getByRole('button', { name: /Validate Demo Enquiry/i });
    fireEvent.click(submitBtn);

    expect(await within(form).findByText(/Please enter your full name/i)).toBeInTheDocument();
    expect(within(form).getByText(/Please enter a valid email address/i)).toBeInTheDocument();
    expect(within(form).getByText(/Please enter a valid 10 to 15-digit phone number/i)).toBeInTheDocument();

    // Fill valid data and submit
    fireEvent.change(within(form).getByLabelText(/Full Name/i), {
      target: { value: 'Aarav Sharma' },
    });
    fireEvent.change(within(form).getByLabelText(/Email Address/i), {
      target: { value: 'aarav.sharma@example.com' },
    });
    fireEvent.change(within(form).getByLabelText(/Phone Number/i), {
      target: { value: '+91 9876543210' },
    });
    fireEvent.change(within(form).getByLabelText(/Enquiry Message/i), {
      target: { value: 'I would like to enquire about B.Sc Nursing eligibility and hostel fees.' },
    });
    fireEvent.click(within(form).getByRole('checkbox'));

    fireEvent.click(submitBtn);

    // Verify exact required demo message
    await waitFor(() => {
      expect(
        screen.getByText('Demo completed — no application has been submitted.')
      ).toBeInTheDocument();
    });

    // Ensure no personal data was stored in localStorage
    expect(window.localStorage.length).toBe(0);
  });

  it('6. Route navigation: renders MTTM, Hospital Administration (PG Diploma), Institution detail, and 404 pages accurately', () => {
    // MTTM page
    const { unmount: u1 } = renderAtRoute('/academics/mttm');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Master of Tourism & Travel Management \(MTTM\)/i,
      })
    ).toBeInTheDocument();
    u1();

    // Hospital Administration page (must be PG Diploma, not MBA or bachelor's degree)
    const { unmount: u2 } = renderAtRoute('/academics/hospital-administration');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Hospital Administration \(PG Diploma\)/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Postgraduate Diploma in Hospital Administration & Healthcare Facility Management/i)
    ).toBeInTheDocument();
    u2();

    // Individual Institution route
    const { unmount: u3 } = renderAtRoute('/institutions/engineering-technology');
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /SEA College of Engineering & Technology/i,
      })
    ).toBeInTheDocument();
    u3();

    // Unknown route shows 404 page
    renderAtRoute('/non-existent-route-xyz');
    expect(
      screen.getByRole('heading', { level: 1, name: /Page Not Found/i })
    ).toBeInTheDocument();
  });
});
