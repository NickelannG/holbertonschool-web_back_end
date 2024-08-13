#!/usr/bin/env python3
"""
This module contains the make_multiplier and multiplier_func functions
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Returns a function that multiplies a float by multiplier(float)
    """
    def multiplier_func(value: float) -> float:
        """
        returns a value(float) multiplied by multiplier(float)
        """
        return value * multiplier
    return multiplier_func
