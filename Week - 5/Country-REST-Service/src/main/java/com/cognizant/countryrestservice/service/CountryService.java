package com.cognizant.countryrestservice.service;

import com.cognizant.countryrestservice.dao.CountryDao;
import com.cognizant.countryrestservice.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryService {
    @Autowired
    private CountryDao countryDao;
    public Country getCountry() {
        return countryDao.getCountry();
    }
}