#!/usr/bin/env python3
"""This module contains the element_length function"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples that contain a squence and its length"""
    return [(i, len(i)) for i in lst]
